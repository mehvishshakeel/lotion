// import React, { useState } from "react";
import "./index.css";

function Headbar() {


  const hideSideBar = () => {
    const sidebar = document.getElementsByClassName("app-sidebar")[0];
    sidebar.classList.toggle("hide");
  };
  

  return (
    <div className="Headbar">
      <div id="title_bar">
        <button id="hide_sidebar" onClick={hideSideBar}>
          &#9776;{" "}
        </button>

        <div id="topic">
          <h1> Lotion </h1>
          <p id="subheading">
            {" "}
            Like Notion. but worse.{" "}
          </p>
        </div>

        {/* <button id="dark_mode" onClick={handleDarkModeClick}>
          &#9681;
        </button> */}
      </div>
    </div>
  );
}

export default Headbar;