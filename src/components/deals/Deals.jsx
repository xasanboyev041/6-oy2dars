import React from "react";
import "./Deals.css";
import Input from "../../images/input.png"

const Deals = () => {
  return (
    <div className="wrapper-deals">
      <button className="load">Load more</button>
      <div className="inbox">
        <h5 className="deals-h5">Incredible deals, right to your inbox!</h5>
        <img className="input" src={Input} alt="" />
        <p className="by">By joining you agree to our Terms and Conditions</p>
      </div>
    </div>
  );
};

export default Deals;
