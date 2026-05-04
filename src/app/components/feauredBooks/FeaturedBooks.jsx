import React from "react";
import { BooksData } from "../../../lib/data";
import HeaderMarque from "../marque/HeaderMarque";
import Book from "./Book";

const FeaturedBooks = async () => {
  const Books = await BooksData();

  return (
    <div className="bg-purple-100">
      <div className="w-[90%] mx-auto py-15 space-y-10 ">
        <HeaderMarque />
        <div></div>
        <h2 className="text-center text-gray-600 text-4xl font-medium">Featured Books</h2>
        <div className="">
          <div className="flex gap-4">
            {[...Books.slice(1, 5), ...Books.slice(1, 5)].map((book, index) => (
              <div key={`${book.id}-${index}`} className="min-w-[5%] sm:min-w-[45%] lg:min-w-[25%] shrink-0">
                <Book book={book} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBooks;
