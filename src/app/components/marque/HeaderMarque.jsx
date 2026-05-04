import { BooksData } from "@/lib/data";
import React from "react";
import Marquee from "react-fast-marquee";

const brackingNews = [
  {
    id: 1,
    title: "Major Storm Causes Flooding Across Coastal Cities",
    category: "Weather",
    date: "2026-04-28",
    status: "Breaking",
  },
  {
    id: 2,
    title: "Global Markets Drop After Economic Report Release",
    category: "Finance",
    date: "2026-04-28",
    status: "Breaking",
  },
  {
    id: 3,
    title: "New Technology Launch Shocks Smartphone Industry",
    category: "Technology",
    date: "2026-04-28",
    status: "Breaking",
  },
  {
    id: 4,
    title: "Championship Final Ends in Dramatic Penalty Shootout",
    category: "Sports",
    date: "2026-04-28",
    status: "Breaking",
  },
  {
    id: 5,
    title: "Government Announces Emergency Energy Plan",
    category: "Politics",
    date: "2026-04-28",
    status: "Breaking",
  },
];

const HeaderMarque = async () => {
  const bookTitle = await BooksData()
  console.log(bookTitle);
  return (
    <div className="flex w-[90%] mx-auto mt-10 lg:px-4 lg:py-4 bg-red-50 ">
      <button className="btn p-2 text-[12px] bg-red-700  text-white font-normal">New Arrivals</button>
      <Marquee speed={100} className="" pauseOnHover={true}>
        {bookTitle.slice(1, 10).map((n) => (
          <span key={n.id}>
            <strong className="ml-10">{n.category}</strong> : {n.title}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default HeaderMarque;
