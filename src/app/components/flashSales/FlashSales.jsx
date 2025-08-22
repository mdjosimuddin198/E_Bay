"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaHeart, FaEye, FaStar } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    image: "https://i.ibb.co.com/DPX2VD7W/image.png",
    discount: 40,
    price: 120,
    oldPrice: 160,
    rating: 4.5,
    reviews: 88,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    image: "https://i.ibb.co.com/5hSzNpv4/image.png",
    discount: 35,
    price: 960,
    oldPrice: 1160,
    rating: 4,
    reviews: 75,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    image: "https://i.ibb.co.com/27hydhgg/image.png",
    discount: 30,
    price: 370,
    oldPrice: 490,
    rating: 4.5,
    reviews: 99,
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    image: "https://i.ibb.co.com/TxBrC033/image.png",
    discount: 25,
    price: 375,
    oldPrice: 500,
    rating: 4.5,
    reviews: 99,
  },
  {
    id: 5,
    name: "Wireless Mouse",
    image: "https://i.ibb.co.com/KpJsLk7N/image.png",
    discount: 20,
    price: 40,
    oldPrice: 50,
    rating: 4.2,
    reviews: 67,
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    image: "https://i.ibb.co.com/GfLWNFkX/image.png",
    discount: 15,
    price: 110,
    oldPrice: 130,
    rating: 4.6,
    reviews: 123,
  },
  {
    id: 7,
    name: "Gaming Laptop",
    image: "https://i.ibb.co.com/Kp9wNSbD/image.png",
    discount: 18,
    price: 1200,
    oldPrice: 1450,
    rating: 4.7,
    reviews: 210,
  },
  {
    id: 8,
    name: "Bluetooth Headset",
    image: "https://i.ibb.co.com/4w2VBLGq/image.png",
    discount: 25,
    price: 85,
    oldPrice: 115,
    rating: 4.3,
    reviews: 150,
  },
  {
    id: 9,
    name: "Smartwatch Pro",
    image: "https://i.ibb.co.com/hF6TvqK9/image.png",
    discount: 22,
    price: 150,
    oldPrice: 190,
    rating: 4.4,
    reviews: 190,
  },
  {
    id: 10,
    name: "Portable Speaker",
    image: "https://i.ibb.co.com/bMB76mrv/image.png",
    discount: 30,
    price: 70,
    oldPrice: 100,
    rating: 4.1,
    reviews: 84,
  },
  {
    id: 11,
    name: "Drone Camera",
    image: "https://i.ibb.co.com/Cs8Kvqtf/image.png",
    discount: 28,
    price: 550,
    oldPrice: 750,
    rating: 4.6,
    reviews: 95,
  },
  {
    id: 12,
    name: "DSLR Camera",
    image: "https://i.ibb.co.com/m5q5vHWJ/image.png",
    discount: 20,
    price: 890,
    oldPrice: 1100,
    rating: 4.8,
    reviews: 175,
  },
];

const FlashSales = () => {
  // Countdown Timer
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-10 max-w-7xl mx-auto px-4">
      {/* Title + Countdown */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <span className="text-red-500">Today’s</span> Flash Sales
        </h2>
        <div className="flex gap-4 text-sm  md:text-xl font-bold">
          <span>Days {timeLeft.days}</span>:<span>Hours {timeLeft.hours}</span>:
          <span>Minutes {timeLeft.minutes}</span>:
          <span>Seconds {timeLeft.seconds}</span>
        </div>
      </div>

      {/* Product Slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            // for screens >= 320px
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            // for screens >= 640px
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            // for screens >= 1024px
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            // for screens >= 1280px
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="border rounded-lg p-4 relative group">
              {/* Discount Badge */}
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                -{product.discount}%
              </span>

              {/* Icons */}
              <div className="absolute top-2 right-2 flex flex-col gap-2">
                <button className="bg-white text-black p-2 rounded-full shadow hover:bg-red-100">
                  <FaHeart />
                </button>
                <button className="bg-white text-black p-2 rounded-full shadow hover:bg-gray-100">
                  <FaEye />
                </button>
              </div>

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full   h-40 object-contain"
              />

              {/* Product Info */}
              <h3 className="mt-4 font-semibold">{product.name}</h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-red-500 font-bold">${product.price}</span>
                <span className="line-through text-gray-400 text-sm">
                  ${product.oldPrice}
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center text-yellow-400 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < Math.round(product.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
                <span className="text-sm text-gray-500 ml-2">
                  ({product.reviews})
                </span>
              </div>

              {/* Add to Cart Button (hover) */}
              <button className="mt-4 w-full btn btn-accent text-white py-2 rounded opacity-0 group-hover:opacity-100 transition">
                Add To Cart
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* View All Button */}
      <div className="flex justify-center mt-6">
        <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default FlashSales;
