import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import FreeBookData from "../components/FreeBookData";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <FreeBookData />
      <Footer />
    </>
  );
}

export default Home;
