"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FiXCircle } from "react-icons/fi";
import { useCartContext } from "@/contexts/cart";
import { cartProductProps } from "@/types/products";
import Image from "next/image";
import { useUserContext } from "@/contexts/user";
import { useSession } from "next-auth/react";

export default function Cart({
  user,
  open,
  setOpen,
}: {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  open: boolean;
  setOpen: (x: boolean) => void;
}) {
  const { products, setProducts } = useCartContext();
  const { data: session } = useSession();
  const { setShowSignin } = useUserContext();
  const handleRemoveItem = (deletedProductId: string) => {
    let filteredItem = products.filter((item) => item.id !== deletedProductId);
    setProducts([...filteredItem]);
  };

  const totalAmount = products.reduce((acc, y) => {
    return acc + y.price;
  }, 0);

  const handleIncQuantityOfItem = (productId: String) => {
    let indexForId = products.findIndex((item) => item.id === productId);
    let tempProducts = [...products];
    tempProducts[indexForId].quantity += 1;
    setProducts([...tempProducts]);
  };
  const handleDecQuantityOfItem = (productId: String) => {
    let indexForId = products.findIndex((item) => item.id === productId);
    let tempProducts = [...products];
    tempProducts[indexForId].quantity -= 1;
    setProducts([...tempProducts]);
  };

  const handleCheckOut = async () => {
    if (!user?.email) {
      setShowSignin(true);
    } else {
      try {
        const fetchHist = await fetch("/api/checkout", {
          cache: "no-store",
          method: "POST",
          body: JSON.stringify({
            customerEMail: user?.email,
            cart: [
              ...products.map((product) => ({
                id: product.id,
                name: product.title,
                price: product.price,
                quantity: product.quantity,
                description: `Its premium quality ${product.title}`,
                image: product.picture,
              })),
            ],
            //   {
            //     "id": "00dcf17d-f426-47e4-b26d-46b951780a3e---1686625691988",
            //    image "picture": "https://cdn.sanity.io/images/y2hovf61/sanity-project/07bea36d04e3d8be219708b9d32ad16551a8f84a-2427x4000.jpg?w=200",
            //     "price": 1100,
            //     "quantity": 19,
            //    name "title": "UX Shirt ",
            //    x "color": "#24e38d",
            //    x "size": "XS",
            // description

            // }
            // {
            //   id: "2345678",
            //   name: "Belt",
            //   price: 200,
            //   quantity: 1,
            //   description: "Its pure Letter belt",
            //   image:
            //     "https://media.istockphoto.com/id/1041615078/photo/two-brown-leather-belts-on-dark-background.jpg?s=612x612&w=0&k=20&c=BSLuwHE3K_u-_x4Ug0XFDt8LYEU-0-lf6PyhizqffGU=",
            // },
            // {
            //   id: "25678",
            //   name: "Bag",
            //   price: 100,
            //   quantity: 3,
            //   description: "Its pure Letter bag",
            //   image:
            //     "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?cs=srgb&dl=pexels-matheus-bertelli-2905238.jpg&fm=jpg",
            // },
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        let response = await fetchHist.json();
        if (response?.success) {
          window.location.replace(response?.url);
        } else {
          console.log("something went wrong");
        }
      } catch (err) {
        console.log("err", err);
        setOpen(false);
      }
    }
  };

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-[#07011a] shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-white">
                            Shopping cart
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-blue-100 hover:text-blue-200"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <FiXCircle
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {products.map((product: cartProductProps) => (
                                <li key={product.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <Image
                                      src={product.picture}
                                      alt={product.title}
                                      width={200}
                                      height={200}
                                      className="h-full w-full "
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-white">
                                        <h3>
                                          <a
                                            href={`http://localhost:3000/productdetails/${
                                              product.id.split("---")[0]
                                            }`}
                                          >
                                            {product.title}
                                          </a>
                                        </h3>
                                        <p className="ml-4">
                                          $ {product.price}
                                        </p>
                                      </div>
                                      <div className="text-white flex items-center">
                                        <p>color :</p>
                                        <div
                                          style={{
                                            backgroundColor: product.color,
                                          }}
                                          className={`ml-3 rounded-full h-6 w-6`}
                                        />
                                      </div>
                                      <div>
                                        <p className="text-white">
                                          size : {product.size}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <div className="flex">
                                        <p className="text-blue-200">
                                          Qty {product.quantity}
                                        </p>
                                        <div className="flex text-white">
                                          <div
                                            onClick={() => {
                                              if (product.quantity > 1)
                                                handleDecQuantityOfItem(
                                                  product.id
                                                );
                                            }}
                                            className={`${
                                              product.quantity > 1
                                                ? "text-white"
                                                : "text-gray-600"
                                            } ml-2 px-2 cursor-pointer ring-1 bg-[#f1f1f199] ring-white`}
                                          >
                                            -
                                          </div>
                                          <div
                                            onClick={() => {
                                              handleIncQuantityOfItem(
                                                product.id
                                              );
                                            }}
                                            className={`ml-2 px-2 cursor-pointer ring-1 bg-[#f1f1f199] ring-white`}
                                          >
                                            +
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex">
                                        <button
                                          onClick={() => {
                                            handleRemoveItem(product?.id);
                                          }}
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-white">
                          <p>Subtotal</p>
                          <p>$ {totalAmount}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-blue-200">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <a
                            onClick={handleCheckOut}
                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          >
                            Checkout
                          </a>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-blue-200">
                          <p>
                            or
                            <button
                              type="button"
                              className="font-medium text-indigo-600 ml-4 hover:text-indigo-500"
                              onClick={() => setOpen(false)}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
