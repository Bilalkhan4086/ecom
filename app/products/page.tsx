import Products from "@/components/Products";
import { Input } from "@/components/ui/input";
import React from "react";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2022-05-30",
  useCdn: false,
});
const AllProducts = async () => {
  const products = await client.fetch(
    `*[_type == "products"]{title,pictures,price,_id}`
  );
  console.log("products", products);
  return (
    <div>
      <div className="max-w-7xl text-white relative m-auto">
        <div className="flex justify-between max-lg:flex-col max-lg:text-center mt-20">
          <h1 className="text-white text-4xl ml-8 font-bold">Our Products</h1>
          <div className="w-[345px] max-lg:m-auto max-lg:mt-5 mr-8">
            <Input type={"text"} placeholder={"Search product..."} />
          </div>
        </div>
        <Products products={products} />
      </div>
    </div>
  );
};

export default AllProducts;
