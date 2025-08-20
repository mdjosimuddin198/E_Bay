import Image from "next/image";
import Link from "next/link";
import React from "react";
import watchImg from "@/Image/Banar_Watch.png";
const WatchesSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-evenly py-6">
      <div className="border flex items-center p-6 gap-8 space-y-4 justify-evenly">
        <div>
          <p className="text-4xl font-bold ">From $500</p>
          <h2 className="text-2xl">Watches For Him</h2>
          <hr className="mb-8" />
          <a href="#" className="mt-8">
            View More
          </a>
        </div>
        <div>
          <Image src={watchImg} height={300} alt="watches image" />
        </div>
      </div>
      <div className="border flex items-center p-6 gap-8 justify-evenly">
        <div>
          <p className="text-4xl font-bold ">From $500</p>
          <h2 className="text-2xl">Watches For Him</h2>
          <hr className="mb-8" />
          <a href="#" className="mt-8">
            View More
          </a>
        </div>
        <div>
          <Image src={watchImg} height={300} alt="watches image" />
        </div>
      </div>
    </div>
  );
};

export default WatchesSection;
