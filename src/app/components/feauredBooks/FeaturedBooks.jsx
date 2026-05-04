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
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {Books.slice(1, 5).map((book, index) => (
              <div key={index}>
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
