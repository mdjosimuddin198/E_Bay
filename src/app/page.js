import React from "react";
import banarImg from "@/Image/Banar_Watch.png";
import Image from "next/image";

const Home = () => {
  return (
    <div className=" py-6 ">
      <div className="flex flex-col items-center justify-evenly lg:flex-row-reverse">
        <div>
          <Image src={banarImg} alt="Watch Image" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">
            Next-Gen Watches for <br /> Next-Gen You
          </h1>
          <p className="py-6">
            Discover cutting-edge designs and <br /> smart innovations that
            match your lifestyle. <br /> From classic elegance to modern tech,
            our next-gen <br /> watches are built for trendsetters like you.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
