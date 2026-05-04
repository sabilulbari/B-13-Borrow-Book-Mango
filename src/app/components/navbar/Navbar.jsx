"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Navlink from "./Navlink";
import { authClient, useSession } from "../../../lib/auth-client";
import Image from "next/image";
import { Spinner } from "@heroui/react";
import { toast } from "react-toastify";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();

  const img = session?.user?.image;
  const name = session?.user?.name;
  return (
    <div className="bg-linear-to-r from-slate-950/80 via-violet-900/80 to-indigo-700/80 backdrop-blur-xl shadow-xl shadow-slate-900/20">
      <div className="w-[95%] md:w-[90%] mx-auto py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-2">
            {/* MOBILE MENU */}
            <div className="dropdown lg:hidden">
              <div tabIndex={0} role="button" className="btn btn-ghost text-white p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>

              <ul className="menu menu-sm dropdown-content bg-slate-950/95 rounded-box z-50 mt-3 w-52 p-2 shadow-lg text-white">
                <li>
                  <Navlink href={"/"}>Home</Navlink>
                </li>
                <li>
                  <Navlink href={"/allBooks"}>All Books</Navlink>
                </li>
                {session?.user && (
                  <li>
                    <Navlink href={"/myProfile"}>My profile</Navlink>
                  </li>
                )}
              </ul>
            </div>

            {/* LOGO */}
            <Link href={"/"} className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
              Digital Book
            </Link>
          </div>

          {/* CENTER (DESKTOP NAV) */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white gap-2">
              <li>
                <Navlink href={"/"}>Home</Navlink>
              </li>
              <li>
                <Navlink href={"/allBooks"}>All Books</Navlink>
              </li>
              {session?.user && (
                <li>
                  <Navlink href={"/myProfile"}>My profile</Navlink>
                </li>
              )}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {/* USER INFO */}
            {session?.user && <p className="hidden sm:block text-white text-sm md:text-base">Hello! {name}</p>}

            <Image
              className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
              src={`${session?.user ? img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaiKiPcLJj7ufrj6M2KaPwyCT4lDSFA5oog&s"}`}
              alt="user"
              height={200}
              width={200}
            />

            {/* BUTTON */}
            {isPending ? (
              <Spinner color="success" />
            ) : session?.user ? (
              <button
                className="px-4 sm:px-6 md:px-8 py-1.5 md:py-2 text-sm md:text-md rounded-xl bg-gradient-to-r from-purple-500 to-violet-600 text-white font-semibold shadow-md hover:scale-105 transition"
                onClick={async () => {
                  await authClient.signOut();
                  toast.error("Logout successful");
                }}
              >
                Logout
              </button>
            ) : (
              <Link href="/login">
                <button className="px-4 sm:px-6 md:px-8 py-1.5 md:py-2 text-sm md:text-md rounded-xl bg-gradient-to-r from-purple-500 to-violet-600 text-white font-semibold shadow-md hover:scale-105 transition">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
