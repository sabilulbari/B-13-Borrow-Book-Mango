import React from "react";
import { BooksData } from "../../../../lib/data";
import Image from "next/image";
import Link from "next/link";

const allBooks = async () => {
  const allBook = await BooksData();
  return (
    <div className="py-10 w-[90%] mx-auto space-y-5" >
      <h2 className="text-center font-bold text-4xl">All books are here!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {allBook.map((b) => (
          <div key={b.id} className="card bg-base-100 shadow-sm p-4 work-sans border border-gray-300">
            <div className="bg-base-200 flex items-center rounded-xl justify-center p-4">
              <Image className="h-50 rounded-lg" src={b.image_url} width={200} height={200} alt="Shoes" />
            </div>
            <div className="card-body text-[#131313ca]">
              <h2 className="card-title font-bold text-[24px] ">{b.title}</h2>
              <p className="font-medium">By : {b.author}</p>
              <div
                className="flex items-center justify-between
                 border-t-2 border-dashed border-[#8d8a8a] pt-4 "
              >
                <div className="font-medium text-[14px]">Category: {b.category}</div>
                <Link className="btn btn-error" href={`/bookDetails/${b.id}`}>
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default allBooks;
