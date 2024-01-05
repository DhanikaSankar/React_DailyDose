import React from "react";
import AirBnb from "./Images/airbnb-img.png";

function Main() {
  return (
    <div>
      <img src={AirBnb} className="cover-img" alt="cover" />
      <h3 className="main-heading">Online Experiences</h3>
      <p className="main-content">
        Lorem ipsum, dolor sit amet consectetur <br/> adipisicing elit. Dolorum nulla
        sint <br/>nostrum libero dolore.
      </p>
    </div>
  );
}

export default Main;
