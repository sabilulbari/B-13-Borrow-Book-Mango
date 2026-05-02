'use client'
import React from 'react';
import { toast } from 'react-toastify';

const BorrowButton = () => {
    const handleClick = () => {
      toast.success("Borrow Successful");
    };
    return (
      <div>
        <button className="btn btn-outline btn-accent" onClick={handleClick}>
          Borrow This Book
        </button>
      </div>
    );
};

export default BorrowButton;