import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import Navbar from './Navbar'

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  
  return (
    <>
      <div>
        <div className="hidden">
          <Navbar/>
        </div>
        <div className="flex h-screen justify-center items-center dark:text-black">
          <div className="modal-box">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-semibold text-xl text-center ">Feedback</h3>
              <div>
                <div className="flex flex-col mt-5">
                  <label className="mb-4 ">Name</label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    className="outline-none border py-2 rounded-md w-80 px-3 md:w-96"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-red-500 mt-3 relative left-2 text-sm">
                      This above field is required
                    </span>
                  )}
                </div>

                <div className="flex flex-col mt-5">
                  <label className="mb-4 ">Email</label>
                  <input
                    type="email"
                    placeholder="johnVin@gmail.com"
                    className="outline-none border py-2 rounded-md w-80 px-3 md:w-96"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-500 mt-3 relative left-2 text-sm">
                      This above field is required
                    </span>
                  )}
                </div>

                <div className="flex flex-col mt-5">
                  <label className="mb-4 ">Message</label>
                  <input
                    type="text"
                    placeholder="Type your message"
                    className="outline-none border py-3 min-h-20 rounded-md w-80 px-3 md:w-96"
                    {...register("message", { required: true })}
                  />
                  {errors.message && (
                    <span className="text-red-500 mt-3 relative left-2 text-sm">
                      This above field is required
                    </span>
                  )}
                </div>

                <div className="flex justify-between">
                  <div>
                    <button className="border px-3 py-2 rounded-md bg-blue-500 text-white mt-5 hover:bg-blue-700 cursor-pointer duration-200">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
