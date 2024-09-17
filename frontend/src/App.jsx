import React from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./course/Courses";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import AboutMain from "./about/AboutMain";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutMain />} />
      </Routes>
    </>
  );
}

export default App;
