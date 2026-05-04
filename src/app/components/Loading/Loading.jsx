"use client";
import React from "react";
import { useSpring, animated } from "react-spring";

const Loading = ({ onComplete }) => {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: 100 },
    config: { duration: 3000 }, // 3 seconds
    onRest: onComplete, // Call onComplete when animation finishes
  });

  return (
    <div className="fixed inset-0 bg-gradient-to-r from-slate-950 via-violet-900 to-indigo-700 flex items-center justify-center z-50">
      <div className="text-center text-white">
        <div className="text-6xl font-bold mb-4">
          <animated.span>{number.to((n) => Math.floor(n))}</animated.span>%
        </div>
        <div className="text-xl">Loading...</div>
      </div>
    </div>
  );
};

export default Loading;
