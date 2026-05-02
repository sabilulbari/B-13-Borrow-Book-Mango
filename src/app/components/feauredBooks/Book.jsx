import Image from "next/image";
import Link from "next/link";
import React from "react";

const Book = ({ book }) => {
  const { image_url, title, category, author, id } = book;
  return (
    <div>
      <div className="card  backdrop-blur-xl shadow-xl shadow-slate-900/20 border border-black/5 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
        <div className="bg-white/10 flex items-center rounded-xl justify-center p-4 mb-4">
          <Image className="h-50 rounded-lg" src={image_url} width={200} height={200} alt="Book Cover" />
        </div>
        <div className="card-body text-black">
          <h2 className="card-title font-bold text-2xl mb-2">{title}</h2>
          <p className="font-medium text-black mb-4">By: {author}</p>
          <div className="flex items-center justify-between border-t-2 border-dashed border-white/30 pt-4">
            <div className="font-medium text-sm text-black">Category: {category}</div>
            <Link className="btn btn-outline  px-4 py-2 font-semibold text-black border border-black/50 hover:bg-white/10" href={`/bookDetails/${id}`}>
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
