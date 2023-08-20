import { CURRENCY } from "@/constants/common";
import { NextRequest, NextResponse } from "next/server";
import _stripe from "stripe";

let stripe: any = new _stripe(process.env.NEXT_PUBLIC_SS!, {
  apiVersion: "2022-11-15",
});

const formatListItems = (listOfCartItems: any[]) => {
  const formatedList = listOfCartItems?.map((item: any) => {
    return {
      quantity: item?.quantity,
      price_data: {
        currency: CURRENCY,
        unit_amount: item?.price * 100,
        product_data: {
          name: item?.name,
          description: item?.description,
          images: [item?.image],
        },
      },
    };
  });
  return formatedList;
};

export async function POST(request: NextRequest) {
  let req: any = await request.json();
  const { cart, customerEMail } = req;
  console.log("cart", cart);
  const line_items = formatListItems(cart);
  console.log("line_items", line_items);
  try {
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${
        process.env.NODE_ENV === "development"
          ? process.env.NEXT_PUBLIC_LOCAL_HOST
          : process.env.NEXT_PUBLIC_PRODUCTION
      }/?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${
        process.env.NODE_ENV === "development"
          ? process.env.NEXT_PUBLIC_LOCAL_HOST
          : process.env.NEXT_PUBLIC_PRODUCTION
      }/products`,
      customer_email: customerEMail,
    });
    console.log("session url 16 =>", session.url);
    return NextResponse.json({ url: session.url, success: true });
  } catch (err: any) {
    console.log("err.message", err.message);
    return NextResponse.json({ success: false });
  }
}
