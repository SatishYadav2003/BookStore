import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./course/Courses";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import AboutMain from "./about/AboutMain";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutMain />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
