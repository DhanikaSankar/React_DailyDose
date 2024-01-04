import React from "react";
import Info from "./Info";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";
import "./card.css"

function BusinessCard() {
  return (
    <div className="main-card">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default BusinessCard;
