import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import FreeBookData from "../components/FreeBookData";
import Footer from "../components/Footer";
import ChatBot from "../generic-component/ChatBot";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <FreeBookData />
      <Footer />
      <ChatBot/>
    
    </>
  );
}

export default Home;
