import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f7f4ef] flex items-center justify-center px-6 font-sans relative overflow-hidden">

      {/* Ghost 404 background text */}
      <p className="absolute select-none font-serif text-[clamp(8rem,28vw,18rem)] leading-none tracking-tighter text-black/5 pointer-events-none">
        404
      </p>

      {/* Card */}
      <div className="relative z-10 text-center max-w-md w-full">

        {/* Status pill */}
        <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 border border-orange-200 text-xs font-mono tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse inline-block" />
          404 · Page not found
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-serif text-[#0f0e0c] leading-tight mb-4">
          Lost in the <em>void.</em>
        </h1>

        {/* Description */}
        <p className="text-[#9e9b94] text-base leading-relaxed mb-10">
          The page you&apos;re looking for has moved, been deleted, or never existed.
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-black/10 to-transparent mb-10" />

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#0f0e0c] text-[#f7f4ef] text-sm font-medium px-6 py-3 rounded-full hover:bg-orange-600 transition-colors duration-300"
          >
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            Back to home
          </Link>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 border border-black/15 text-[#0f0e0c] text-sm font-medium px-6 py-3 rounded-full hover:border-black/40 transition-colors duration-200"
          >
            Report issue
          </a>
        </div>

      </div>
    </div>
  );
}
