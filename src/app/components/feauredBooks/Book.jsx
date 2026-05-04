import Image from "next/image";
import Link from "next/link";
import React from "react";

const Book = ({ book }) => {
  const { image_url, title, id } = book;
  return (
    <div>
      <div className="card h-full flex flex-col backdrop-blur-xl shadow-xl shadow-slate-900/20 border border-black/5 rounded-2xl hover:scale-102 transition-transform duration-300">
        <div className="bg-white/10 flex items-center justify-center rounded-xl h-50">
          <Image className="h-full rounded-lg" src={image_url} width={150} height={200} alt="Book Cover" />
        </div>
        <div className="card-body text-black">
          <h2 className="card-title font-bold text-xl mb-2">{title}</h2>
          <div className="flex items-center justify-center border-t-2 border-dashed border-black/30 pt-4">
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
