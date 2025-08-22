"use client";
import React from "react";
import HeroPhone from "@/Image/hero_Phone.png";
import images from "@/Image/image-removebg-preview (7).png";
import Hero2 from "@/Image/images-removebg-preview.png";
import Image from "next/image";
import { FaApple, FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

// Swiper import
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Hero from "./components/hero/Hero";
import FlashSales from "./components/flashSales/FlashSales";

// slider data
const slides = [
  {
    id: 1,
    title: "iPhone 14 Series",
    subtitle: "Up to 10% off Voucher",
    image: HeroPhone,
    link: "/",
    icon: <FaApple />,
    btnText: "See More",
  },
  {
    id: 2,
    title: "Smart Watch Series",
    subtitle: "20% Discount Offer",
    image: Hero2,
    link: "/",
    btnText: "Shop Now",
  },
  {
    id: 3,
    title: "Premium Headphones",
    subtitle: "Grab Yours Today",
    image: images,
    link: "/",
    btnText: "Explore",
  },
];

const Home = () => {
  return (
    <>
      <div className="py-6 grid items-start justify-center gap-4 grid-cols-12">
        {/* Sidebar */}
        <div className="col-span-2  bg-white hidden  rounded-2xl text-black">
          <ul className="px-4 py-6 border-r sticky top-0 ">
            <li>
              <Link href="/"> Woman’s Fashion</Link>
            </li>
            <li>
              <Link href="/">Men’s Fashion</Link>
            </li>
            <li>
              <Link href="/"> Electronics</Link>
            </li>
            <li>
              <Link href="/"> Home & Lifestyle</Link>
            </li>
            <li>
              <Link href="/"> Medicine</Link>
            </li>
            <li>
              <Link href="/">Sports & Outdoor</Link>
            </li>
            <li>
              <Link href="/"> Baby’s & Toys</Link>
            </li>
            <li>
              <Link href="/"> Groceries & Pets</Link>
            </li>
            <li>
              <Link href="/"> Health & Beauty</Link>
            </li>
          </ul>
        </div>

        {/* Slider Section */}
        <div className="col-span-10 flex md:border-l items-center">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="w-full rounded-2xl"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="flex flex-col lg:flex-row-reverse items-center justify-evenly">
                  {/* Image */}
                  <div>
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      className="w-full max-w-[400px] h-[400px] object-cover rounded-lg"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex items-center justify-center flex-col text-center lg:text-left">
                    <h1 className="text-3xl flex items-center gap-3 font-bold">
                      {slide.icon && slide.icon} {slide.title}
                    </h1>
                    <p className="py-6 text-2xl md:text-6xl">
                      {slide.subtitle}
                    </p>
                    <Link className="flex items-center gap-2" href={slide.link}>
                      {slide.btnText} <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <main>
        <Hero></Hero>
        <FlashSales></FlashSales>
      </main>
    </>
  );
};

export default Home;
