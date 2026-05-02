// app/components/HeroSection.jsx

import Image from "next/image";

const DownloadSection = () => {
  return (
    <section className="bg-[#d7e2ef] w-full min-h-screen flex items-center">
      <div className="w-11/12 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center py-16">
        {/* Left Content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#1f2937] mb-6">Booktime</h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl mb-8">
            Booktime is the children&apos;s and young readers&apos; gateway to a world of knowledge and imagination. Explore a variety of interesting books and enjoyable stories in
            different languages.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-2xl bg-linear-to-r from-purple-500 to-violet-600 text-white font-semibold text-xl shadow-md hover:scale-105 transition">
              Sign Up
            </button>

            <button className="px-8 py-4 rounded-2xl border border-gray-700 text-gray-800 font-semibold text-xl hover:bg-white transition">Sign In</button>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative flex justify-center items-center">
          {/* Badge */}
          <div className="absolute left-0 top-1/3 bg-pink-500 text-white rounded-full w-28 h-28 flex flex-col justify-center items-center shadow-xl z-20 rotate-[-12deg]">
            <span className="text-sm font-semibold">Completely</span>
            <span className="text-3xl font-bold leading-none">Free</span>
          </div>

          {/* Back Phone */}
          <div className="relative rotate-[-18deg] translate-x-10 z-0">
            <Image
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500"
              alt="phone"
              width={240}
              height={480}
              className="rounded-[2rem] shadow-2xl border-4 border-black"
            />
          </div>

          {/* Front Phone */}
          <div className="absolute rotate-0 z-10">
            <Image
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500"
              alt="phone"
              width={240}
              height={480}
              className="rounded-[2rem] shadow-2xl border-4 border-black"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
