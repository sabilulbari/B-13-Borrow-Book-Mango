"use client";
import Link from "next/link";
import React from "react";
import Navlink from "./Navlink";
import { authClient, useSession } from "../../../../lib/auth-client";
import Image from "next/image";

const Navbar = () => {
  const { data: session } = authClient.useSession();

  const img = session?.user?.image;
  const name = session?.user?.name;
  console.log(session, "session data");
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
              <li>
                <Navlink href={"/"}>Home</Navlink>
              </li>
              <li>
                <Navlink href={"/allBooks"}>All Books</Navlink>
              </li>
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
        <div className="navbar-end gap-4">
          <div className="flex gap-4 items-center">
            {session?.user && <p className="text-white">Hellow! {session?.user?.name}</p>}

            <Image
              className="w-10 h-10 rounded-full overflow-hidden"
              src={`${session?.user ? img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaiKiPcLJj7ufrj6M2KaPwyCT4lDSFA5oog&s"}`}
              alt="session.user.name"
              height={200}
              width={200}
            ></Image>
          </div>
          {session?.user ? (
            <Link href="/login">
              <button className="px-8 py-2 cursor-pointer rounded-2xl bg-linear-to-r from-purple-500 to-violet-600 text-white font-semibold text-md shadow-md hover:scale-105 transition">
                Logout
              </button>
            </Link>
          ) : (
            <Link href="/login">
              <button className="px-8 py-2 cursor-pointer rounded-2xl bg-linear-to-r from-purple-500 to-violet-600 text-white font-semibold text-md shadow-md hover:scale-105 transition">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
