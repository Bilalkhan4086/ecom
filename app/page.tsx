import Lines from "@/components/Lines";
import NewArrivals from "@/components/NewArrivals";
import Products from "@/components/Products";
import Image from "next/image";
import { heroImage } from "@/assets/images";
import { client } from "@/sanity/lib/client";

const Home = async () => {
  const allProducts = await client.fetch(
    `*[_type == "products"]{title,pictures,price,_id}`
  );

  return (
    <div>
      <div className="max-w-7xl text-white relative pr-5 max-sm:px-10 pl-24 m-auto">
        <Lines />
        <div className="flex justify-between max-lg:flex-col-reverse">
          <div className="lg:pt-64 max-w-3xl max-xl:max-w-[540px] max-sm:max-w-md max-lg:max-w-[540px]">
            <h1 className="text-7xl max-lg:text-6xl max-sm:text-5xl my-3 font-bold">
              Let’s shop with us
            </h1>
            <h3 className="text-gray-400  max-lg:text-2xl  max-sm:text-xl my-5 text-3xl">
              E.com first made waves in Pakistan’s e-commerce market after its
              introduction in 2023. E.com understands that online shopping in
              Pakistan comes with its fair share of risks.
            </h3>
          </div>
          <div className="relative h-[500px] w-full">
            <div className="absolute max-lg:bottom-10 bottom-0 max-[450px]:bottom-12 max-[450px]:right-14 right-16 max-lg:right-20">
              <div className="h-64 w-64 max-[450px]:w-48  max-[450px]:h-48 rotate-45 blur-lg top-[230px] bg-pink-500" />
              <Image
                className="absolute bottom-0 right-0 w-[300px]"
                src={heroImage.src}
                width={300}
                height={500}
                alt="Man"
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-5xl mt-28 mb-4 max-lg:text-4xl max-sm:text-3xl my-3 font-bold">
            Our Products
          </h2>
          <Products products={allProducts} />
          <div className="flex">
            <button className="uppercase m-auto cursor-pointer  hover:bg-gray-900 ring-1 ring-white text-white px-20 py-3">
              Load More
            </button>
          </div>
        </div>
        <div>
          <NewArrivals />
        </div>
      </div>
    </div>
  );
};

export default Home;
