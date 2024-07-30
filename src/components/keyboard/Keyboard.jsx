import React from "react";
import "./Keyboard.css";
import KeyboardImg from "../../images/keyboard.png";
import Small from "../../images/small.png"

const Keyboard = () => {
  return (
    <div className="wrapper-keyboard">
      <div className="wrapper-words">
        <button className="featured">Featured</button>
        <p className="beached">Beached to take you somewhere else</p>
        <span className="hour">
            <img className="hourImg" src={Small} alt="" />
            <p>Farok Rastegar  .  1 hour ago</p>
        </span>
      </div>
      <img className="key-img" src={KeyboardImg} alt="" />
    </div>
  );
};

export default Keyboard;
