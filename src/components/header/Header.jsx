import React from "react";
import "./Header.css";
import Small from "../../images/small.png";

const Header = () => {
  return (
    <>
      <div className="wrapper">
        <h1>Fabrx</h1>
        <div className="header-right">
          <img className="start-img" src={Small} alt="" />
          <h2>Bruce Lee</h2>
          <i class="fa-solid fa-gift"></i>
          <i class="fa-regular fa-bell"></i>
        </div>
      </div>
    </>
  );
};

export default Header;
