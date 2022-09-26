import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div class="footerBox">
      <img
        alt="logo"
        src={logo}
        style={{
          position: "absolute",
          top: "20%",
          width: 60,
          height: 30,
          left: "12%",
          backgroundColor: "#fff",
        }}
      />
      <span class="moto">Making sales easy</span>
      <div class="d-flex socials">
        <Instagram
          fontSize="small"
          style={{ color: "white", marginRight: 5 }}
        />
        <Facebook
          fontSize="medium"
          style={{ color: "white", marginRight: 5 }}
        />
        <Twitter fontSize="medium" style={{ color: "white", marginRight: 5 }} />
        <YouTube fontSize="medium" style={{ color: "white", marginRight: 5 }} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          right: "25%",
        }}
      >
        <span class="howItWorks">How it works</span>
        <span class="faq">FAQs</span>
        <span class="aboutUs">About us</span>
      </div>
      <div class="vl"></div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          right: "10%",
        }}
      >
        <span class="tc">Terms and conditions</span>
        <span class="contactUs">Contact us</span>
        <span class="privacy">Privacy policy</span>
      </div>
    </div>
  );
};

export default Footer;
