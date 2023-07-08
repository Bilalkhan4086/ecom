// ./utils/get-stripejs.ts
import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_SP!);
  }
  return stripePromise;
};

export default getStripe;
