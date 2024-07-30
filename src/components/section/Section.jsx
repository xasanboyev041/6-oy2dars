import React from "react";
import "./Section.css";
import bgImage from "../../images/bgimages.png";
import Small from "../../images/small.png";

const Section = () => {
  return (
    <div className="container">
      <div className="wrapper-section">
        <p className="mind">5 mind blowing facts about the iPhone 14</p>
        <span>
          <img src={Small} alt="" />
          <p>Farok Rastegar . 1 hour ago</p>
        </span>
      </div>
    </div>
  );
};

export default Section;
