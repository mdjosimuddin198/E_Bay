import Link from "next/link";
import React from "react";
import { FaCartShopping, FaHeart } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="navbar border-b shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Contact</Link>
            </li>
            <li>
              <Link href="/shop">About</Link>
            </li>
            <li>
              <Link href="/shop">Sign Up</Link>
            </li>
          </ul>
        </div>
        <a className=" text-xl">Watch Store</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Contact</Link>
          </li>
          <li>
            <Link href="/shop">About</Link>
          </li>
          <li>
            <Link href="/shop">Sign Up</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="flex items-center gap-4">
          {/* <input type="text" className="outline border" /> */}
          <li className="hover:cursor-pointer">
            <FaHeart />
          </li>
          <li className="hover:cursor-pointer">
            <FaCartShopping />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
