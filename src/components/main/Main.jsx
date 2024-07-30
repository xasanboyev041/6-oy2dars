import React from "react";
import "./Main.css";
import Small from "../../images/small.png";
import Pathway from "../../images/pathway.png";
import Awesome from "../../images/awesome.png";
import Amazing from "../../images/amazing.png";
import Ranked from "../../images/ranked.png";
import Travel from "../../images/travel.png";

const Main = () => {
  return (
    <div className="wrapper-full">
      <h3 className="article">Featured articles</h3>
      <div className="wrapper-main home">
        <img className="mainsImg" src={Pathway} alt="" />
        <div className="wrapper-articles">
          <h4 className="things">Pathway to the Mediterranean</h4>
          <span className="hour">
            <img className="hourImg" src={Small} alt="" />
            <p className="other">Farok Rastegar . 1 hour ago</p>
          </span>
          <p className="other">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain a…
          </p>
        </div>
      </div>
      <div className="wrapper-main">
        <img className="mainsImg" src={Awesome} alt="" />
        <div className="wrapper-articles">
          <h4 className="things">
            My awesome safari in Lahbab Desert, United Arab Emirates
          </h4>
          <span className="hour">
            <img className="hourImg" src={Small} alt="" />
            <p className="other">Farok Rastegar . 1 hour ago</p>
          </span>
          <p className="other">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain a…
          </p>
        </div>
      </div>
      <div className="wrapper-main">
        <img className="mainsImg" src={Amazing} alt="" />
        <div className="wrapper-articles">
          <h4 className="things">10 amazing things to do in Cuba</h4>
          <span className="hour">
            <img className="hourImg" src={Small} alt="" />
            <p className="other">Farok Rastegar . 1 hour ago</p>
          </span>
          <p className="other">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain a…
          </p>
        </div>
      </div>
      <div className="wrapper-main">
        <img className="mainsImg" src={Ranked} alt="" />
        <div className="wrapper-articles">
          <h4 className="things">The best street food in the world. Ranked!</h4>
          <span className="hour">
            <img className="hourImg" src={Small} alt="" />
            <p className="other">Farok Rastegar . 1 hour ago</p>
          </span>
          <p className="other">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain a…
          </p>
        </div>
      </div>
      <div className="wrapper-main">
        <img className="mainsImg" src={Travel} alt="" />
        <div className="wrapper-articles">
          <h4 className="things">Travel Packing guide for beginners</h4>
          <span className="hour">
            <img className="hourImg" src={Small} alt="" />
            <p className="other">Farok Rastegar . 1 hour ago</p>
          </span>
          <p className="other">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain a…
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
