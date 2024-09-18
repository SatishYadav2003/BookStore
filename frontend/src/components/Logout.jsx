import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("user");
      toast.success("Logout successfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.success("Logout Error:", error.message);
    }
  };
  return (
    <div>
      <a
        className="bg-black dark:bg-pink-500 dark:text-white   text-white rounded-md cursor-pointer duration-300 px-3 py-2 hover:bg-slate-800 "
        onClick={handleLogout}
      >
        Logout
      </a>
    </div>
  );
}

export default Logout;
