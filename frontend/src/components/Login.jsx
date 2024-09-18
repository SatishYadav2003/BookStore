import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      emailSiteWala: data.email,
      passwordSiteWala: data.password,
    };

    axios
      .post("http://localhost:4000/user/login", userInfo)
      .then((res) => {
        if (res.data) {
          document.getElementById("my_modal_3").close();
          toast.success("Login successfully");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
        localStorage.setItem("user", JSON.stringify(res.data.userData));
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Error: " + error.response.data.message);
        }
      });
  };
  return (
    <>
      <dialog id="my_modal_3" className="modal dark:text-black">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <Link
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-xl text-center ">Login</h3>
            <div>
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
                  <button className=" px-3 py-2 rounded-md bg-pink-500 text-white mt-5 hover:bg-pink-700 cursor-pointer duration-200 font-thin">
                    Login
                  </button>
                </div>
                <div className="mt-7">
                  <p className="font-thin text-lg">
                    Not registered?
                    <Link to="/signup" className="link link-error text-xl ">
                      {" "}
                      SignUp
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Login;
