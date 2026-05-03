import Link from "next/link";
import React from "react";
import Navlink from "./Navlink";

const Navbar = () => {
  return (
    <div className=" bg-linear-to-r from-slate-950/80 via-violet-900/80 to-indigo-700/80 backdrop-blur-xl b  shadow-xl shadow-slate-900/20 ">
      <div className="w-[90%] mx-auto navbar  py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-slate-950/95 rounded-box z-10 mt-3 w-52 p-2 shadow-lg text-white">
              {/* {link} */}
            </ul>
          </div>
          <Link href={"/"} className="cursor-pointer normal-case text-2xl font-semibold text-white">
            Digital Book
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            <li>
              <Navlink href={"/"}>Home</Navlink>
            </li>
            <li>
              <Navlink href={"/allBooks"}>All Books</Navlink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/login">
            <button className="px-8 py-2 cursor-pointer rounded-2xl bg-linear-to-r from-purple-500 to-violet-600 text-white font-semibold text-md shadow-md hover:scale-105 transition">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
