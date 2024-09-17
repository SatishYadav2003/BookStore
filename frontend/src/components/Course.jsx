import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
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

  return (
    <>
      <div className="min-h-screen">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="md:mt-36 mt-24 text-center">
            <h1 className="text-2xl md:text-4xl  font-semibold">
              We are delighted to have you{" "}
              <span className="text-pink-500">Here!:)</span>
            </h1>
            <p className=" md:mt-10 my-6">
              Hello everybody welcome to this course page in this page you will
              get the entire access to our{" "}
              <span className="text-pink-500 font-semibold">
                Paid and Free{" "}
              </span>
              books so you can read and buy any book and if you don't have time
              to read you can purchase your favourite book. We have lot's of
              category of books availabel in our database but if you don't find
              your favourite book which you want to read so please provide the
              details of that book we will surely add that book in our BOOK
              STORE
            </p>
            <Link to="/">
              <button className="bg-pink-500 text-white hover:bg-pink-700 duration-300 cursor-pointer px-4 py-2 rounded-md ">
                Back
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 justify-items-center lg:grid-cols-2 res-len:grid-cols-3  md:mt-20 bg-red-50 rounded-md md:dark:bg-slate-900 mt-10">
            {bookStatus.map((item) => (
              <Cards item={item} key={item.id} padder="py-10 md:mb-5 py-4" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
