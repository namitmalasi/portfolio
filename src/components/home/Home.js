import React from "react";
import Body from "../body/Body";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default Home;
