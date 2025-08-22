"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function AddProduct() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    image: "",
    discount: "",
    price: "",
    oldPrice: "",
    rating: "",
    reviews: "",
    description: "",
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-600 border-t-transparent"></div>
        <p className="ml-4 text-white text-lg font-semibold">Loading ...</p>
      </div>
    );
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("✅ Product added successfully!");
        setForm({
          name: "",
          image: "",
          discount: "",
          price: "",
          oldPrice: "",
          rating: "",
          reviews: "",
          description: "",
        });
        router.push("/");
      } else {
        alert("❌ Failed to add product!");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-black text-white shadow-2xl rounded-2xl mt-8 border border-gray-700">
      <h1 className="text-3xl font-extrabold text-center mb-8 text-white">
        🛒 Add New Product
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {[
          { name: "name", label: "Product Name", type: "text" },
          { name: "image", label: "Image URL", type: "text" },
          { name: "discount", label: "Discount (%)", type: "number" },
          { name: "price", label: "Price", type: "number" },
          { name: "oldPrice", label: "Old Price", type: "number" },
          { name: "rating", label: "Rating", type: "number", step: "0.1" },
          { name: "reviews", label: "Reviews Count", type: "number" },
        ].map((field, i) => (
          <div key={i}>
            <label className="block mb-2 text-sm font-semibold text-gray-300">
              {field.label}
            </label>
            <input
              type={field.type}
              step={field.step || ""}
              name={field.name}
              placeholder={field.label}
              value={form[field.name]}
              onChange={handleChange}
              className="w-full border border-gray-600 px-4 py-3 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required={["name", "image", "price"].includes(field.name)}
            />
          </div>
        ))}

        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-300">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Product Description"
            value={form.description}
            onChange={handleChange}
            className="w-full border border-gray-600 px-4 py-3 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-indigo-700 transition-all duration-300"
        >
          ➕ Add Product
        </button>
      </form>
    </div>
  );
}
