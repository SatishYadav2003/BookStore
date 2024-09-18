import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const popUp = () => {
    document.getElementById("my_modal_3").showModal();
  };

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const storeData = {
      nameSiteWala: data.text,
      contactSiteWala: data.tel,
      emailSiteWala: data.email,
      passwordSiteWala: data.password,
    };

    axios
      .post("http://localhost:4000/user/signup", storeData)
      .then((res) => {
        if (res.data) {
          toast.success("SignUp successfull");
        }

        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Error: " + error.response.data.message);
        }
      });
  };

  return (
    <>
      <div className="flex h-screen justify-center items-center dark:text-black">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-semibold text-xl text-center ">
              Create An Account
            </h3>
            <div>
              <div className="flex flex-col mt-5">
                <label className="mb-4 ">Name</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="outline-none border py-2 rounded-md w-80 px-3 md:w-96"
                  {...register("text", { required: true })}
                />
                {errors.text && (
                  <span className="text-red-500 mt-3 relative left-2 text-sm">
                    This above field is required
                  </span>
                )}
              </div>
              <div className="flex flex-col mt-5">
                <label className="mb-4 ">Contact</label>
                <input
                  type="tel"
                  placeholder="Enter contact number"
                  className="outline-none border py-2 rounded-md w-80 px-3 md:w-96"
                  {...register("tel", { required: true })}
                />
                {errors.tel && (
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
                <label className="mb-4">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password here"
                  className="outline-none border py-2 rounded-md w-80 px-3 md:w-96"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500 mt-3 relative left-2 text-sm">
                    This above field is required
                  </span>
                )}
              </div>
              <div className="flex justify-between">
                <div>
                  <button className="border px-3 py-2 rounded-md bg-pink-500 text-white mt-5 hover:bg-pink-700 cursor-pointer duration-200">
                    SignUp
                  </button>
                </div>
                <div className="mt-7">
                  <p className="font-thin text-lg">
                    Have account?
                    <a onClick={popUp} className="link link-error text-xl ">
                      {" "}
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>
          <Login />
        </div>
      </div>
    </>
  );
}

export default Signup;
