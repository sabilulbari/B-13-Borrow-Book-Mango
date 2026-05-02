import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa6';

const Book = ({ book }) => {
  const { image_url, title, category, author } = book;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm p-4 work-sans border border-gray-300">
        <div className="bg-base-200 flex items-center rounded-xl justify-center p-4">
          <Image className="h-50 rounded-lg" src={image_url} width={200} height={200} alt="Shoes" />
        </div>
        <div className="card-body text-[#131313ca]">
          <h2 className="card-title font-bold text-[24px] ">{title}</h2>
          <p className="font-medium">By : {author}</p>
          <div
            className="flex items-center justify-between
         border-t-2 border-dashed border-[#8d8a8a] pt-4  "
          >
            <div className="font-medium text-[14px]">Category: {category}</div>
            <Link className='btn btn-error' href={'/bookDetails'}>View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;