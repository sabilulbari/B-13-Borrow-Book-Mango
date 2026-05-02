import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="https://img.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg?w=360"
            alt="book"
            width={200}
            height={200}
            className="max-w-md rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Find Your Next Read</h1>
            <p className="py-6">
              Step into a seamless and modern digital library experience where discovering,
              <br /> exploring, and borrowing books is easier than ever. Browse a vast collection,
              <br /> filter by categories, and enjoy a secure, high-performance platform built for today’s readers.
            </p>
            <Link href={"/allBooks"} className="btn btn-primary">
              Browse Now
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;