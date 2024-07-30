import React from "react";
import "./Cards.css";
import Watch from "../../images/watch.png";
import Earphone from "../../images/earphone.png";
import Phone from "../../images/phone.png";
import Covid from "../../images/covid.png";
import Iphone from "../../images/iphone.png";
import MacBook from "../../images/MacBook.png";
import Small from "../../images/small.png";

const Cards = () => {
  return (
    <>
      <div className="container-cards">
        <h2 className="h2-cards">Featured articles</h2>
        <ul>
          <li>
            <img src={Watch} alt="about site watch" />
            <h3 className="h3-cards">10 beaches you must visit</h3>
            <div className="span">
              <img className="img-small" src={Small} alt="" />
              <p className="p-cards">Farok Rastegar . 1 hour ago</p>
            </div>
            <p className="p-cards">
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the…
            </p>
          </li>
          <li>
            <img src={Earphone} alt="" />
            <h3 className="h3-cards">10 beaches you must visit</h3>
            <div className="span">
              <img className="img-small" src={Small} alt="" />
              <p className="p-cards">Farok Rastegar . 1 hour ago</p>
            </div>
            <p className="p-cards">
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the…
            </p>
          </li>
          <li>
            <img src={Phone} alt="" />
            <h3 className="h3-cards">10 beaches you must visit</h3>
            <div className="span">
              <img className="img-small" src={Small} alt="" />
              <p className="p-cards">Farok Rastegar . 1 hour ago</p>
            </div>
            <p className="p-cards">
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the…
            </p>
          </li>
          <li>
            <img src={Covid} alt="" />
            <h3 className="h3-cards">10 beaches you must visit</h3>
            <div className="span">
              <img className="img-small" src={Small} alt="" />
              <p className="p-cards">Farok Rastegar . 1 hour ago</p>
            </div>
            <p className="p-cards">
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the…
            </p>
          </li>
          <li>
            <img src={Iphone} alt="" />
            <h3 className="h3-cards">10 beaches you must visit</h3>
            <div className="span">
              <img className="img-small" src={Small} alt="" />
              <p className="p-cards">Farok Rastegar . 1 hour ago</p>
            </div>
            <p className="p-cards">
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the…
            </p>
          </li>
          <li>
            <img src={MacBook} alt="" />
            <h3 className="h3-cards">10 beaches you must visit</h3>
            <div className="span">
              <img className="img-small" src={Small} alt="" />
              <p className="p-cards">Farok Rastegar . 1 hour ago</p>
            </div>
            <p className="p-cards">
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the…
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Cards;
