import { productProps } from "@/types/products";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

interface ProductsCompProps {
  products: productProps[];
}
export default function Products({ products }: ProductsCompProps) {
  // Get a pre-configured url-builder from your sanity client
  const builder = imageUrlBuilder(client);

  // Then we like to make a simple function like this that gives the
  // builder an image and returns the builder for you to specify additional
  // parameters:
  function urlFor(source: any) {
    return builder.image(source);
  }

  return (
    <div className="bg-transparent">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products?.map((product) => {
            return (
              <Link
                key={product._id}
                href={`/productdetails/${product._id}`}
                className="group"
              >
                <div className="aspect-h-1 aspect-w-1 h-[280px] w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image
                    src={urlFor(product?.pictures[0]?.asset?._ref)
                      ?.width(400)
                      ?.url()}
                    alt={product?.pictures[0]?.asset?._ref}
                    width={400}
                    height={800}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-blue-100">{product.title}</h3>
                <p className="mt-1 text-lg font-medium text-white">
                  {product.price}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
