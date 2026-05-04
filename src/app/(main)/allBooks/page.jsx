'use client'
import React, { useState, useEffect } from "react";
import { BooksData } from "../../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import { Label, SearchField } from "@heroui/react";
import Leftside from "@/app/components/allbookLeftSide/Leftside";

const AllBooks = () => {
  const [allBook, setAllBook] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
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
            <SearchField.Input onChange={(e) => setSearch(e.target.value)} placeholder="Search by title..." />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>
      </div>
      <div className="grid grid-cols-10 gap-5">
        <div className="col-span-3">
          <Leftside selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory}></Leftside>
        </div>
        <div className="grid col-span-7 grid-cols-3 gap-5">
          {allBook
            .filter((b) => b.title.toLowerCase().includes(search.toLowerCase()))
            .filter((b) => selectedCategory === "" || b.category === selectedCategory)
            .map((b) => (
              <div key={b.id}>
                <div className="card h-full flex flex-col backdrop-blur-xl shadow-xl shadow-slate-900/20 border border-black/5 rounded-2xl hover:scale-102 transition-transform duration-300">
                  <div className="bg-white/10 flex items-center justify-center rounded-xl h-50">
                    <Image className="h-full rounded-lg" src={b.image_url} width={150} height={200} alt="Book Cover" />
                  </div>
                  <div className="card-body text-black">
                    <h2 className="card-title font-bold text-xl mb-2">{b.title}</h2>
                    <div className="flex items-center justify-center border-t-2 border-dashed border-black/30 pt-4">
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
    </div>
  );
};

export default AllBooks;
