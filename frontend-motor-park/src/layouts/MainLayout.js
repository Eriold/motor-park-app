import React from "react";
import logo from "../assets/icons/car-parking-color.png";

function MainLayout(props) {
  return (
    <div>
      <h1 className="main-title">
        <img src={logo} alt="logo" />
        arking App
      </h1>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default MainLayout;
