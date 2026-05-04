import Link from "next/link";
import React from "react";

import { FaXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-red-900/50 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 ">
          {/* Logo & Description */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/" className=" cursor-pointer text-3xl hover:border-none font-bold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Digital Book
              </Link>
            </div>

            <p className="text-zinc-400 text-lg max-w-md">
              A modern digital library that brings the timeless joy of books into a seamless online experience. Discover, filter, and borrow from a rich collection with ease and
              speed.
            </p>
          </div>

          {/* Quick Links */}

          <div className="md:col-span-2 text-center">
            <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 text-center">
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 text-center">
            <h3 className="text-white font-semibold mb-6 text-lg">Social Links</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 text-center ">
            <h3 className="text-white  font-semibold mb-6 ">Resources</h3>
            <ul className="space-y-4 text-white text-2xl flex gap-5 text-center justify-center">
              <li>
                <a href="#" className="hover:text-red-500 transition duration-400">
                  <FaInstagram></FaInstagram>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500  duration-400">
                  <FaFacebook></FaFacebook>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500  duration-400">
                  <FaXTwitter></FaXTwitter>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div>© {new Date().getFullYear()} Digitools. All rights reserved.</div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-red-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-red-400 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-red-400 transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
