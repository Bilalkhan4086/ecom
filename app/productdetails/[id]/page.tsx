import ProductDetails from "@/components/ProductDetails";
import { client } from "@/sanity/lib/client";
import React from "react";

interface ProductDetailProps {
  params: { id: string };
}

const ProductDetail = async ({ params }: ProductDetailProps) => {
  const product = await client.fetch(
    `*[_type == "products" && _id == "${params?.id}"]`
  );
  console.log("params", product);

  return (
    <div>
      <div className="max-w-7xl text-white relative m-auto">
        <div className="flex">
          <h1 className="text-white text-3xl mx-auto font-bold">
            Product Details
          </h1>
        </div>
        {<ProductDetails product={product[0]} />}
      </div>
    </div>
  );
};

export default ProductDetail;
