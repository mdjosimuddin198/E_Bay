import React from "react";
import HeroPhone from "@/Image/hero_Phone.png";
import Image from "next/image";
import { FaApple, FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const Home = () => {
  return (
    <div className=" py-6 grid  items-center justify-center gap-4 grid-cols-12">
      <div className="col-span-2 bg-white hidden md:block rounded-2xl  text-black ">
        <ul className="px-4 py-6 border-r  sticky ">
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
      <div className="flex md:border-l  col-span-10 flex-col items-center justify-evenly lg:flex-row-reverse">
        <div>
          <Image src={HeroPhone} alt="Watch Image" />
        </div>
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-3xl flex items-center gap-3 font-bold">
            <FaApple /> iPhone 14 Series
          </h1>
          <p className="py-6 text-2xl md:text-7xl">
            Up to 10% <br /> off Voucher
          </p>
          <Link className="flex items-center gap-2" href="/">
            See More <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
