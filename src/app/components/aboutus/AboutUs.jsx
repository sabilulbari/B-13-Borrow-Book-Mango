"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="w-full bg-[#eaeaea] py-20">
      <div className="w-11/12 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1f2937] mb-6">About Us</h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Welcome to <span className="font-semibold text-[#2563eb]">BookTime</span> — where stories find their readers, and readers find their stories.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We believe books are not just pages, they are experiences. Our platform makes borrowing books simple, fast, and accessible for everyone — from curious beginners to
            lifelong readers.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Built with love and a touch of nostalgia, we’re bringing the charm of traditional libraries into the digital age — because good things should never go out of style.
          </p>
        </motion.div>

        {/* Right Content */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="bg-white p-8 rounded-3xl shadow-lg">
          <div className="grid grid-cols-2 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold text-[#2563eb]">10K+</h3>
              <p className="text-gray-500">Books Available</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#2563eb]">5K+</h3>
              <p className="text-gray-500">Happy Readers</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#2563eb]">1K+</h3>
              <p className="text-gray-500">Daily Borrows</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#2563eb]">24/7</h3>
              <p className="text-gray-500">Access</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
