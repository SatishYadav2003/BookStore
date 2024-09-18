import React, { useEffect, useState } from "react";
import Logout from "./Logout";
import ThemeController from "./ThemeController";
import Login from "./Login";
import { useAuth } from "../context/AuthProvider";

function Navbar() {
  const navItem = (
    <>
      {" "}
      <li className="dark:hover:bg-purple-400 rounded-md dark:hover:text-black">
        <a href="/">Home</a>
      </li>
      <li className="dark:hover:bg-purple-400 rounded-md dark:hover:text-black">
        <a href="/course">Course</a>
      </li>
      <li className="dark:hover:bg-purple-400 rounded-md dark:hover:text-black">
        <a href="/contact">Contact</a>
      </li>
      <li className="dark:hover:bg-purple-400 rounded-md dark:hover:text-black">
        <a href="/about">About</a>
      </li>
    </>
  );
  const navItemMobile = (
    <>
      {" "}
      <li className="dark:text-black">
        <a href="/">Home</a>
      </li>
      <li className="dark:text-black">
        <a href="/course">Course</a>
      </li>
      <li className="dark:text-black">
        <a href="/contact">Contact</a>
      </li>
      <li className="dark:text-black">
        <a href="/about">About</a>
      </li>
    </>
  );

  const [theme, setThemeVal] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [stickyVal, setStickyVal] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 0) {
        setStickyVal(true);
      } else {
        setStickyVal(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  const popUp = () => {
    document.getElementById("my_modal_3").showModal();
  };

  const [authUser, setAuthUser] = useAuth();

  return (
    <div
      className={`max-w-screen-2xl font-bold container mx-auto md:px-20 px-4 sticky left-0 top-0 z-10 
    ${
      stickyVal
        ? "sticky-navbar shadow-md duration-300 transition-all ease-in-out backdrop-blur-sm"
        : ""
    }`}
    >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItemMobile}
            </ul>
          </div>
          <a className="text-2xl font-bold cursor-pointer">BookStore</a>
        </div>
        <div className="navbar-end space-x-2">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 dark:hover:bg-purple-400 rounded-md">
              {navItem}
            </ul>
          </div>

          <div>
            <ThemeController theme={theme} setThemeVal={setThemeVal} />
          </div>

          {authUser ? (
            <Logout />
          ) : (
            <div>
              <a
                className="bg-black dark:bg-pink-500 dark:text-white   text-white rounded-md cursor-pointer duration-300 px-3 py-2 hover:bg-slate-800 "
                onClick={popUp}
              >
                Login
              </a>
              <Login />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
