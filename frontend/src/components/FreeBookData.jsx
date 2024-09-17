import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";

import axios from "axios";

function FreeBookData() {
  const [bookStatus, setBookStatus] = useState([]);

  useEffect(() => {
    const bookDataHandler = async () => {
      try {
        const bookData = await axios.get("http://localhost:4000/book");

        setBookStatus(bookData.data);
      } catch (error) {
        console.log("Some error occurred:", error);
      }
    };

    bookDataHandler();
  }, []);

  const freeDataBook = bookStatus.filter((value) => value.status === "Free");

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  mt-14 md:mt-10 text-center md:text-left md:overflow-visible overflow-hidden">
        <div className="space-y-5 mb-10 md:mb-0">
          <h1 className="text-xl font-semibold">Available Free Books</h1>
          <p>
            Below are the books which we offer free to our readers and they can
            absolutely read this books as well as they can buy those books at
            absolutely free of cost. If you to read more books that is not
            availabel in our free or demo area you can for paid book where you
            will get lots of category books.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 justify-items-center lg:grid-cols-2 res-len:grid-cols-3  md:mt-20 bg-red-50 rounded-md md:dark:bg-slate-900 mt-10">
          {freeDataBook.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default FreeBookData;
