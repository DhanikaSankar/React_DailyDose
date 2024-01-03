import React from "react";
import Header from "./Header";
import './main.css';

function Main() {
  return (
    <div>
    <Header />
      <main className="list-main">
        <h2 className="list-title">Fun facts about React</h2>
        <ul className="list-items">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprice apps, including mobile apps.</li>
        </ul>
      </main>
    </div>
  );
}

export default Main;
