import React from "react";
import BannerPic from "../../public/BannerPic.png";
import { useRef } from "react";
import toast from "react-hot-toast";
import axios from "axios";

function Banner() {
  const emailRef = useRef();

  const handleSubscribe = () => {


    const email = emailRef.current.value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailPattern.test(email)) {
      toast.error("Please enter a valid email address!");
      return; 
    }
    
    const data={
      email:email
    }

    axios
      .post("http://localhost:4000/subscribeAlert", data)
      .then((res) => {
        if (res.data) {
          toast.success(`${res.data.message}: Thank You For Subscribe`);
        }
      })
      .catch((error) => {
        toast.error("Error:"+ error.response.data.message);
      });

    emailRef.current.value = "";
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 flex flex-col md:px-20 md:flex-row">
        <div className="md:w-1/2 w-full md:mt-32 order-2 md:order-1">
          <div className="space-y-12">
            <h1 className="font-bold text-4xl text-center md:text-left">
              Hello,welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl text-center md:text-left">
              If you love to read books then this book store is for you where
              you can access lots of book and their are lots of variety of
              collection we have. You can purchase the book or you can have
              rent, also we provide{" "}
              <span className="text-pink-500 font-bold">
                Free and Paid books
              </span>{" "}
              so what are you waiting for grab it now!!!
            </p>
            <div>
              <label className="input input-bordered flex items-center gap-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70 dark:text-black"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="email"
                  className="grow "
                  placeholder="Email"
                  ref={emailRef}
                />
              </label>
            </div>
          </div>

          <button
            className="btn btn-active btn-secondary mt-6 w-full md:w-fit "
            onClick={handleSubscribe}
          >
            Subscribe
          </button>
        </div>
        <div className="md:w-1/2 w-full order-1 md:order-2 md:mt-28">
          <img src={BannerPic} className="w-full" alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
