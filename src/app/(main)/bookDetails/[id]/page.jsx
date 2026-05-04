import Image from "next/image";
import React from "react";
import { getBookDetails } from "../../../../lib/data";
import BorrowButton from "@/app/components/borrowbutton/BorrowButton";

export const metadata = {
    title: "Brrow Books || Book details",
    description: "All books are here",
  };

const BookDetails = async ({ params }) => {
  const { id } = await params;
  const bookById = await getBookDetails(id);
  const { yearOfPublishing, totalPages, title, rating, publisher, image_url, description, category, available_quantity, author } = bookById;
  console.log(image_url, "image url ");
  return (
    <div className=" grid grid-cols-2 md:grid-cols-10  bg-base-100 w-[90%] mx-auto mt-8 work-sans">
      <div className=" flex items-center col-span-2 justify-center md:col-span-4 p-6 bg-base-200 rounded-xl">
        <Image className="max-h-100 rounded-lg" src={image_url} width={200} height={200} alt="img" />
      </div>
      <div className="card-body col-span-2 md:col-span-6 space-y-3">
        <h2 className="card-title font-bold text-[40px] text-[#131313]">{title}!</h2>
        <p className="font-medium text-[20px] text-[#131313]">By : {author}</p>
        <hr className="text-[#131313b3]" />
        <p className="text-[20px] text-[#131313] font-semibold">Category: {category}</p>
        <hr className="text-[#131313b3]" />
        <p>{description}</p>
        <p className="text-[#131313] text-[14px]">
          <strong>Stock Quantity :</strong> {available_quantity}
        </p>

        <hr className="text-[#131313b3]" />

        <div className="flex gap-10 text-[10px] sm:text-[12px] md:text-[16px]">
          <div>
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year Of Publishing:</p>
            <p>Rating:</p>
          </div>
          <div>
            <p>
              <strong>{totalPages}</strong>
            </p>
            <p>
              <strong>{publisher}</strong>
            </p>
            <p>
              <strong>{yearOfPublishing}</strong>
            </p>
            <p>
              <strong className=" block">{rating}</strong>
            </p>
          </div>
        </div>
        <div className="card-actions justify-end">
          <BorrowButton />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
