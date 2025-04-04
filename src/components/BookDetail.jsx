import AddToCart from "./AddToCart";
import BookReviews from "./BookReviews";
import React, { useState, useEffect } from "react"; // 確保有引入 useState

function BookDetail({ book }) {


    if (!book) {
        return <div className="mt-50 mb-50 text-center">找不到這本書的資料<br></br>請稍後再試</div>;
    }

    return (
        <div >
         
            <div className="flex flex-row align-middle mt-10 felx-row-center">
                <div >
                    <img
                        alt={book.title}
                        className="rounded-xl ml-10 w-150"
                        src={book.cover}
                    />
                </div>

                <div className="ml-20 mr-10">
                    <h1 className="text-3xl font-bold mb-3">
                        {book.title}
                    </h1>
                    <h2 className="mb-2">
                        {book.author}
                    </h2>
                    <hr />
                    <p className="font-extralight text-md mt-5">
                        {book.summary}
                    </p>
                </div>
            </div>
            <div className="ml-5 mr-5 mt-20">
                <AddToCart book={book} />
                <BookReviews book={book} />
            </div>
        </div>
    );
} export default BookDetail;