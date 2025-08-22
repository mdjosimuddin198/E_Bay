"use client";

import Link from "next/link";
import React from "react";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="navbar border-b  shadow-sm px-4">
      {/* Navbar Start */}
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
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
              <Link href="/products">products</Link>
            </li>
            {session && (
              <li>
                <Link href="/dashboard/addProducts">Add Products</Link>
              </li>
            )}
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
        <a className="text-xl font-bold">E_Bay</a>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">products</Link>
          </li>
          {session && (
            <li>
              <Link href="/dashboard/addProducts">Add Products</Link>
            </li>
          )}
          <li>
            <Link href="/shop">Contact</Link>
          </li>
          <li>
            <Link href="/shop">About</Link>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-4">
        {/* <FaHeart className="hover:cursor-pointer" />
        <FaCartShopping className="hover:cursor-pointer" /> */}

        {session && (
          <div className="flex items-center gap-2 ml-4">
            {session.user.image && (
              <img
                src={session.user.image}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            )}
            <span className="hidden md:inline">{session.user.name}</span>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="px-2 py-1 bg-red-500 text-white rounded"
            >
              Logout
            </button>
          </div>
        )}
        {!session && (
          <li className="btn btn-accent px-8 rounded-xl py-1">
            <Link href="/api/auth/login">Log In</Link>
          </li>
        )}
      </div>
    </div>
  );
};

export default Navbar;
