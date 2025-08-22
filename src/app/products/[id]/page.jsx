"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProtectedRoute from "@/app/components/protectedRoute/ProtectedRoute";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://e-bay-server.vercel.app/products/${id}`
        );
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (!product) {
    return <p className="text-center py-10">Loading product details...</p>;
  }

  return (
    <ProtectedRoute>
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-semibold text-green-600">
            ${product.price}
          </span>
          <span className="line-through text-gray-500">
            ${product.oldPrice}
          </span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-yellow-500">⭐ {product.rating}</span>
          <span className="text-gray-500">({product.reviews} reviews)</span>
        </div>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Buy Now
        </button>
      </div>
    </ProtectedRoute>
  );
}
