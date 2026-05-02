'use client'
import React, { useState, useEffect } from "react";
import { BooksData } from "../../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import { Label, SearchField } from "@heroui/react";

const AllBooks = () => {
  const [allBook, setAllBook] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    BooksData().then(setAllBook);
  }, []);
  return (
    <div className="py-10 w-[90%] mx-auto space-y-5">
      <h2 className="text-center font-bold text-4xl">All books are here!</h2>
      <div className="w-[50%] mx-auto space-y-4">
        <SearchField fullWidth name="search">
          <SearchField.Group className="border border-blue-500">
            <SearchField.SearchIcon />
            <SearchField.Input onChange={(e)=> setSearch(e.target.value)} placeholder="Search by title..." />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {allBook.filter(b => b.title.toLowerCase().includes(search.toLowerCase())).map((b) => (
          <div key={b.id}>
                <div className="card  backdrop-blur-xl shadow-xl shadow-slate-900/20 border border-black/5 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                  <div className="bg-white/10 flex items-center rounded-xl justify-center p-4 mb-4">
                    <Image className="h-50 rounded-lg" src={b.image_url} width={200} height={200} alt="Book Cover" />
                  </div>
                  <div className="card-body text-black">
                    <h2 className="card-title font-bold text-xl mb-2">{b.title}</h2>
                    <p className="font-medium text-black mb-4">By: {b.author}</p>
                    <div className="flex items-center justify-between border-t-2 border-dashed border-white/30 pt-4">
                      <div className="font-medium text-sm text-black">Category: {b.category}</div>
                      <Link className="btn btn-outline  px-4 py-2 font-semibold text-black border border-black/50 hover:bg-white/10" href={`/bookDetails/${b.id}`}>
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
