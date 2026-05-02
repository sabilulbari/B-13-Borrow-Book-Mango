import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-slate-950 via-violet-900 to-indigo-700 text-white py-20 shadow-2xl shadow-slate-900/30">
      <div className="absolute inset-0 bg-slate-950/20" />
      <div className="relative w-[90%] mx-auto grid gap-12 lg:grid-cols-2 items-center">
        <div className="space-y-8">
          <span className="inline-block rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.25em] text-slate-200">
            Discover. Borrow. Enjoy.
          </span>
          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl">Find Your Next Read</h1>
          <p className="max-w-xl text-lg text-slate-200/90">
            Explore a modern digital library built for readers who value speed, simplicity, and a premium browsing experience. Discover curated collections, smart search, and
            instant borrowing from one elegant platform.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/allBooks">
              <button className="rounded-3xl bg-linear-to-r from-violet-500 to-indigo-500 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-violet-500/30 transition hover:-translate-y-0.5 hover:shadow-violet-500/40">
                Browse Books
              </button>
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-slate-950/30 max-w-xl w-full">
            <Image
              src="https://img.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg?w=360"
              alt="stack of books"
              width={420}
              height={420}
              className="w-full rounded-[1.5rem] object-cover"
            />
            <div className="absolute bottom-6 left-6 rounded-3xl bg-slate-950/90 px-5 py-4 text-white/90 shadow-lg shadow-slate-950/25">
              <p className="text-sm uppercase tracking-[0.18em] text-violet-300">Premium Collection</p>
              <p className="text-base font-semibold">Curated reads for every mood.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
