import Link from "next/link";
import React from "react";

const Navbar = () => {
  const link = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/allBooks"}>All Books</Link>
      </li>
    </>
  );
  return (
    <div className=" bg-linear-to-r from-slate-950/80 via-violet-900/80 to-indigo-700/80 backdrop-blur-xl b  shadow-xl shadow-slate-900/20 ">
      <div className="w-[90%] mx-auto navbar  py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {" "}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
              </svg>
            </div>
            <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-slate-950/95 rounded-box z-10 mt-3 w-52 p-2 shadow-lg text-white">
              {link}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl font-semibold text-white">Digital Book</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{link}</ul>
        </div>
        <div className="navbar-end">
          <Link href={"/login"} className="btn btn-sm btn-outline btn-white px-6 py-2 font-semibold text-white border-white/30 hover:bg-white/10">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
