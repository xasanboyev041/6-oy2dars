import React from "react";
import "./Footer.css";
import Input from "../../images/input.png";
import FooterEnd from "../../images/footerEnd.png";

const Footer = () => {
  return (
    <div className="wrapper-full-footer">
      <div className="wrapper-footer">
        <ul className="footer-ul">
          <li>
            <p className="first">First Column</p>
            <p className="link-li">Link One</p>
            <p className="link-li">Link Two</p>
            <p className="link-li">Link Three</p>
            <p className="link-li">Link Four</p>
          </li>
          <li>
            <p className="first">Second Column</p>
            <p className="link-li">Link One</p>
            <p className="link-li">Link Two</p>
            <p className="link-li">Link Three</p>
            <p className="link-li">Link Four</p>
          </li>
          <li>
            <p className="first">Third Column</p>
            <p className="link-li">Link One</p>
            <p className="link-li">Link Two</p>
            <p className="link-li">Link Three</p>
            <p className="link-li">Link Four</p>
          </li>
          <li>
            <p className="first">Fourth Column</p>
            <p className="link-li">Link One</p>
            <p className="link-li">Link Two</p>
            <p className="link-li">Link Three</p>
            <p className="link-li">Link Four</p>
          </li>
        </ul>
        <div className="wrapper-footer-img">
          <h5>Never miss an update</h5>
          <img src={Input} alt="" />
        </div>
      </div>
      <img className="end-img" src={FooterEnd} alt="" />
    </div>
  );
};

export default Footer;
