import React from 'react';
import { BooksData } from '../../../../lib/data';
import Marquee from 'react-fast-marquee';
import HeaderMarque from '../marque/HeaderMarque';

const FeaturedBooks = async () => {

    const Books = await BooksData();
    console.log(Books);

    return (
      <div>
        <HeaderMarque/>          
        <div></div>
        <h2>All: {Books.length}</h2>
      </div>
    );
};

export default FeaturedBooks;