import React from "react";
import { BooksData } from "../../../../lib/data";
import HeaderMarque from "../marque/HeaderMarque";
import Book from "./Book";

const FeaturedBooks = async () => {
  const Books = await BooksData();

  return (
    <div className="w-[90%] mx-auto py-15 space-y-10">
      <HeaderMarque />
      <div></div>
      <h2 className="text-center text-gray-600 text-4xl font-medium">Featured Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Books.slice(1, 5).map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
