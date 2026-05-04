// app/components/HeroSection.jsx

import Image from "next/image";

const DownloadSection = () => {
  return (
    <section className="bg-[#d7e2ef] w-full min-h-screen flex lg:items-center">
      <div className="w-[95%] sm:w-11/12 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center py-12 sm:py-16">
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1f2937] mb-4 sm:mb-6">Booktime</h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8">
            Booktime is the children&apos;s and young readers&apos; gateway to a world of knowledge and imagination. Explore a variety of interesting books and enjoyable stories in
            different languages.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-500 to-violet-600 text-white font-semibold text-base sm:text-lg md:text-xl shadow-md hover:scale-105 transition">
              Sign Up
            </button>

            <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-gray-700 text-gray-800 font-semibold text-base sm:text-lg md:text-xl hover:bg-white transition">
              Sign In
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative flex justify-center items-center mt-10 lg:mt-0">
          {/* BADGE */}
          <div className="absolute left-2 sm:left-6 md:left-10 top-1/4 sm:top-1/3 bg-pink-500 text-white rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex flex-col justify-center items-center shadow-xl z-20 rotate-[-12deg]">
            <span className="text-xs sm:text-sm font-semibold">Completely</span>
            <span className="text-xl sm:text-2xl md:text-3xl font-bold leading-none">Free</span>
          </div>

          {/* BACK PHONE */}
          <div className="relative rotate-[-12deg] sm:rotate-[-15deg] md:rotate-[-18deg] translate-x-6 sm:translate-x-10 z-0">
            <Image
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500"
              alt="phone"
              width={200}
              height={420}
              className="sm:w-[220px] md:w-[240px] rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl border-4 border-black"
            />
          </div>

          {/* FRONT PHONE */}
          <div className="absolute z-10">
            <Image
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500"
              alt="phone"
              width={200}
              height={420}
              className="sm:w-[220px] md:w-[240px] rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl border-4 border-black"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
