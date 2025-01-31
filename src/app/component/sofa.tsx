"use client";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allProducts } from "@/sanity/lib/queries";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/product";
import Link from "next/link";

const Sofa = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [isCheckout, setIsCheckout] = useState(false); // Fixed undefined setIsCheckout

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(allProducts);
      setProduct(fetchedProduct);
    }
    fetchProduct();
  }, []);

  // Add to Cart Function
  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      if (!prevCart.some((item) => item._id === product._id)) {
        return [...prevCart, product];
      }
      return prevCart;
    });
  };

  // Remove From Cart Function
  const handleRemoveFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  // Clear Cart Function
  const clearCart = () => {
    setCart([]);
  };

  // Checkout Function
  const goToCheckout = () => {
    alert("Redirecting to checkout...");
    setIsCheckout(true);
  };

  return (
    <div className="mx-auto px-4 py-8">
      {/* Product Section */}
      <h1 className="text-blue-900 font-bold text-2xl text-center">
        Latest Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {product.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-150"
          >
            <Link href={`/product/${product.slug.current}`}>
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt="image"
                  height={200}
                  width={200}
                  className="w-38 h-38 object-center rounded-md"
                />
              )}
              <h1 className="text-lg font-semibold mt-4">{product.name}</h1>
              <p className="text-gray-700 mt-2">${product.price}</p>
              <p className="text-gray-700 mt-2">{product.description}</p>
            </Link>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="mt-8 border-t pt-6">
        <h2 className="text-pink-700 font-bold text-3xl text-center">
          Items In Your Cart
        </h2>
        {cart.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4">
            {cart.map((item) => (
              <div
                key={item._id}
                className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-150"
              >
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    alt="image"
                    height={200}
                    width={200}
                    className="w-38 h-38 object-center rounded-md"
                  />
                )}
                <h1 className="text-lg font-semibold mt-4">{item.name}</h1>
                <p className="text-green-700 mt-2">${item.price}</p>
                <button
                  onClick={() => handleRemoveFromCart(item._id)}
                  className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Remove
                </button>
                <div className="flex justify-between items-center mt-6 text-black">
                  <span className="font-semibold text-xl">
                    Total: ${cart.reduce((total, product) => total + product.price , 0)}
                  </span>
                </div>

                <div className="flex justify-between mt-4">
                  <button
                    onClick={goToCheckout}
                    className="bg-green-300 py-3 px-6 rounded-lg text-lg shadow-md hover:bg-green-700 transition duration-150"
                  >
                    Proceed to Checkout
                  </button>
                  <button
                    onClick={clearCart}
                    className="bg-yellow-300 py-3 px-6 rounded-lg text-lg shadow-md hover:bg-yellow-500 transition duration-150"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-700 mt-4 text-center">Your cart is empty.</p>
        )}
      </div>

      {/* Checkout Section */}
      {isCheckout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-black">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Checkout</h2>
            <p className="text-lg text-green-800">
              Please confirm your order before proceeding
            </p>

            <div className="mt-4">
              <ul>
                {cart.map((product, index) => (
                  <li key={index} className="flex justify-between mb-4">
                    <span>{product.name}</span>
                    <span>${product.price}</span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-between mt-4">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold">
                  ${cart.reduce((total, product) => total + product.price, 0)}
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setIsCheckout(false)}
                className="bg-slate-600 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-slate-400"
              >
                Close
              </button>

              <button
                onClick={() =>
                  alert("Order Confirmed! Will be delivered in 2 working days.")
                }
                className="bg-green-600 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-green-700"
              >
                Confirm Order!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sofa;
