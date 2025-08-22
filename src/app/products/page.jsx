"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// const products = [
//   {
//     id: 1,
//     name: "HAVIT HV-G92 Gamepad",
//     image: "https://i.ibb.co/DPX2VD7W/image.png",
//     discount: 40,
//     price: 120,
//     oldPrice: 160,
//     rating: 4.5,
//     reviews: 88,
//     description:
//       "The HAVIT HV-G92 Gamepad is designed for professional gamers, featuring ergonomic grips, highly responsive buttons, and precise analog sticks. Enjoy seamless gaming experiences with customizable controls and vibration feedback for immersive play.",
//   },
//   {
//     id: 2,
//     name: "AK-900 Wired Keyboard",
//     image: "https://i.ibb.co/5hSzNpv4/image.png",
//     discount: 35,
//     price: 960,
//     oldPrice: 1160,
//     rating: 4,
//     reviews: 75,
//     description:
//       "The AK-900 Wired Keyboard is perfect for both gaming and productivity. It comes with mechanical switches, RGB backlighting, and a durable design. Typing and gaming feel satisfying with every key press.",
//   },
//   {
//     id: 3,
//     name: "IPS LCD Gaming Monitor",
//     image: "https://i.ibb.co/27hydhgg/image.png",
//     discount: 30,
//     price: 370,
//     oldPrice: 490,
//     rating: 4.5,
//     reviews: 99,
//     description:
//       "A 27-inch IPS LCD monitor offering full HD resolution, 144Hz refresh rate, and low response time. Ideal for competitive gaming, it delivers vivid colors, wide viewing angles, and smooth motion handling.",
//   },
//   {
//     id: 4,
//     name: "S-Series Comfort Chair",
//     image: "https://i.ibb.co/TxBrC033/image.png",
//     discount: 25,
//     price: 375,
//     oldPrice: 500,
//     rating: 4.5,
//     reviews: 99,
//     description:
//       "The S-Series Comfort Chair provides excellent lumbar support and adjustable features for long hours of gaming or working. Its ergonomic design reduces strain and enhances overall comfort.",
//   },
//   {
//     id: 5,
//     name: "Wireless Mouse",
//     image: "https://i.ibb.co/KpJsLk7N/image.png",
//     discount: 20,
//     price: 40,
//     oldPrice: 50,
//     rating: 4.2,
//     reviews: 67,
//     description:
//       "High precision wireless mouse with ergonomic design, long battery life, and smooth tracking. Perfect for office work, gaming, and everyday use, offering comfort and accuracy.",
//   },
//   {
//     id: 6,
//     name: "Mechanical Keyboard",
//     image: "https://i.ibb.co/GfLWNFkX/image.png",
//     discount: 15,
//     price: 110,
//     oldPrice: 130,
//     rating: 4.6,
//     reviews: 123,
//     description:
//       "Tactile mechanical keyboard with customizable RGB lighting. Durable and responsive switches provide an excellent typing experience for both gamers and professionals.",
//   },
//   {
//     id: 7,
//     name: "Gaming Laptop",
//     image: "https://i.ibb.co/Kp9wNSbD/image.png",
//     discount: 18,
//     price: 1200,
//     oldPrice: 1450,
//     rating: 4.7,
//     reviews: 210,
//     description:
//       "High performance gaming laptop equipped with a dedicated GPU, fast processor, and ample RAM. Enjoy smooth gameplay, streaming, and multitasking with premium build quality.",
//   },
//   {
//     id: 8,
//     name: "Bluetooth Headset",
//     image: "https://i.ibb.co/4w2VBLGq/image.png",
//     discount: 25,
//     price: 85,
//     oldPrice: 115,
//     rating: 4.3,
//     reviews: 150,
//     description:
//       "Wireless Bluetooth headset with crystal clear sound, active noise cancellation, and comfortable ear cushions. Perfect for gaming, music, and online meetings.",
//   },
//   {
//     id: 9,
//     name: "Smartwatch Pro",
//     image: "https://i.ibb.co/hF6TvqK9/image.png",
//     discount: 22,
//     price: 150,
//     oldPrice: 190,
//     rating: 4.4,
//     reviews: 190,
//     description:
//       "Fitness-focused smartwatch featuring heart rate monitoring, step tracking, sleep analysis, and notifications. Sleek design and water resistance make it suitable for everyday wear.",
//   },
//   {
//     id: 10,
//     name: "Portable Speaker",
//     image: "https://i.ibb.co/bMB76mrv/image.png",
//     discount: 30,
//     price: 70,
//     oldPrice: 100,
//     rating: 4.1,
//     reviews: 84,
//     description:
//       "Compact portable speaker with deep bass, clear sound, and long battery life. Ideal for outdoor use, parties, or personal listening at home.",
//   },
//   {
//     id: 11,
//     name: "Drone Camera",
//     image: "https://i.ibb.co/Cs8Kvqtf/image.png",
//     discount: 28,
//     price: 550,
//     oldPrice: 750,
//     rating: 4.6,
//     reviews: 95,
//     description:
//       "High-resolution drone camera capable of capturing stunning aerial photos and videos. Features stable flight, GPS tracking, and easy-to-use controls.",
//   },
//   {
//     id: 12,
//     name: "DSLR Camera",
//     image: "https://i.ibb.co/m5q5vHWJ/image.png",
//     discount: 20,
//     price: 890,
//     oldPrice: 1100,
//     rating: 4.8,
//     reviews: 175,
//     description:
//       "Professional DSLR camera with interchangeable lenses, full HD video recording, and advanced features for photography enthusiasts and professionals.",
//   },
// ];

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // async function declare
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    // call the async function
    fetchProducts();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i)
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      else if (rating >= i - 0.5)
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      else stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
    return stars;
  };

  return (
    <main className="min-h-screen  text-slate-100 py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white/5 rounded-2xl p-4 backdrop-blur-md shadow-lg hover:shadow-xl transition"
          >
            <div className="relative w-full h-48 mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="h-[200px] w-full"
              />
              {product.discount > 0 && (
                <span className="absolute top-2 left-2 bg-red-500 text-xs px-2 py-1 rounded">
                  -{product.discount}%
                </span>
              )}
            </div>

            <h2 className="font-semibold text-lg mt-9 ">{product.name}</h2>
            <div className="flex items-center gap-2 mb-2">
              {renderStars(product.rating)}
            </div>
            <p className="mb-2 text-sm text-slate-400">
              {product.reviews} reviews
            </p>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">${product.price}</span>
              {product.oldPrice && (
                <span className="line-through text-sm text-slate-500">
                  ${product.oldPrice}
                </span>
              )}
            </div>
            <Link
              href={`products/${product._id}`}
              className="mt-3 w-full rounded-xl  py-2 text-white font-medium btn btn-accent transition"
            >
              View More
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
