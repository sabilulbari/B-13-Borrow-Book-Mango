"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "animate.css";
import { useSpring, animated } from "@react-spring/web";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Banner = () => {
  // Floating animation (React Spring)
  const floating = useSpring({
    from: { transform: "translateY(0px)" },
    to: async (next) => {
      while (true) {
        await next({ transform: "translateY(-12px)" });
        await next({ transform: "translateY(0px)" });
      }
    },
    config: { duration: 2000 },
  });

  return (
    <section className="relative overflow-hidden bg-linear-to-r from-slate-950 via-violet-900 to-indigo-700 text-white py-20 shadow-2xl shadow-slate-900/30">
      <div className="absolute inset-0 bg-slate-950/20" />

      <div className="relative w-[90%] mx-auto grid gap-12 lg:grid-cols-2 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate__animated animate__fadeInLeft">
          <span className="inline-block rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.25em] text-slate-200">
            Discover. Borrow. Enjoy.
          </span>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl animate__animated animate__fadeInUp">Find Your Next Read</h1>

          <p className="max-w-xl text-lg text-slate-200/90 animate__animated animate__fadeInUp animate__delay-1s">
            Explore a modern digital library built for readers who value speed, simplicity, and a premium browsing experience.
          </p>

          <div className="flex flex-wrap gap-4 items-center animate__animated animate__fadeInUp animate__delay-2s">
            <Link href="/allBooks">
              <button className="rounded-3xl bg-linear-to-r from-violet-500 to-indigo-500 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-violet-500/30 transition hover:-translate-y-1 hover:scale-105 hover:shadow-violet-500/50 cursor-pointer">
                Browse Books
              </button>
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative flex justify-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-slate-950/30 max-w-xl w-full">
            {/* Swiper Slider */}
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              modules={[Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              <SwiperSlide>
                <Image
                  src="https://img.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg?w=360"
                  alt="books"
                  width={420}
                  height={420}
                  className="w-full rounded-[1.5rem] object-cover"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src="https://img.freepik.com/free-vector/reading-concept-illustration_114360-851.jpg"
                  alt="reading"
                  width={420}
                  height={420}
                  className="w-full rounded-[1.5rem] object-cover"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src="https://img.freepik.com/free-vector/online-library-concept_23-2148634971.jpg"
                  alt="library"
                  width={420}
                  height={420}
                  className="w-full rounded-[1.5rem] object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
