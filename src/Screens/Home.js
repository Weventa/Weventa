import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import pay from "../assets/brandLogo/pay.svg";
import payoneer from "../assets/brandLogo/payoneer.png";
import stripe from "../assets/brandLogo/stripe.png";
import slack from "../assets/brandLogo/slack.png";
import first from "../assets/homePageImages/first.jpeg";
import second from "../assets/homePageImages/second.jpeg";
import third from "../assets/homePageImages/third.jpeg";
import { ArrowUpward } from "@mui/icons-material";

const MainBody = () => {
  const articlesMap = [
    {
      url: first,
      title: "Are you a vendor? Let's help you sell more of your products",
      text: "With our network of 500+ affiliates and a sales rate of 98%, be rest assured of getting more paying customers quickly.",
      buttonName: "Become a vendor",
    },
    {
      url: second,
      title:
        "Love making money from the comfort of your home? Join our affiliate program",
      text: "Get up to 60% commission by recommending any high valued products on Weventa. Our highly effective tracking system ensures that you are compensated for the sales you refer.",
      buttonName: "Become an affiliate",
    },
    {
      url: third,
      title: "Access a wide range of digital and physical products",
      text: "Get access to digital products such as courses, tickets, CVs, resumes, etc. as well as physical products like books, journals, etc. Our wide range of product offers ensures that you find whatsoever it is you seek.",
      buttonName: "Enter the market",
    },
  ];
  return (
    <>
      <div class="mainBodyIntroBox">
        <div class="blurMainBody">
          <h1 class="overHeadIntroHomePage">
            All-in-one E-commerce store to sell your products or services
            globally
          </h1>
          <p class="subTextIntroHomePage">
            Thrive in the world's most established affiliate networking platform
            designed to help you achieve intelligent, scalable, and sustainable
            growth in your business.
          </p>
          <button class="exploreButton">
            <div class="exploreButtonText">Explore</div>
          </button>
        </div>
      </div>

      <div class="ourPartnerBox">
        <h4 class="ourPartner mb-0 pb-0">Our partners</h4>
        <div class="d-flex justify-content-around mt-0">
          <img alt="payoneer" src={payoneer} class="payoneer" />
          <img alt="stripe" src={stripe} class="stripe" />
          <img alt="slack" src={slack} class="slack" />
          <img alt="pay" src={pay} class="pay" />
          <div class="paypal mt-0">PayPal</div>
        </div>
      </div>
      {articlesMap.map((data, index) => {
        return (
          <div class="listAll" key={index}>
            <div
              class={
                index === 0
                  ? "imgVendor"
                  : index === 1
                  ? "imgAffiliate"
                  : "imgMarket"
              }
            ></div>
            <div
              class={
                index === 0
                  ? "subContentBox1"
                  : index === 1
                  ? "subContentBox2"
                  : index === 2
                  ? "subContentBox3"
                  : ""
              }
            >
              <h1 class="homeMapOutExplanationTitle">{data.title}</h1>
              <span class="homeMapOutExplanationSubTitle">{data.text}</span>
              <button class="becomeAvendorButton">{data.buttonName}</button>
            </div>
          </div>
        );
      })}
      <div class="whyUsBox">
        <h1 class="whyUsTitle">Why register with Weventa</h1>
        <span class="whyUstext">
          Weventa is an industry leader in the affiliate marketing space,
          maintaining an impressive track record of success and publisher
          satisfaction since 2013. The Weventa platform empowers entrepreneurs
          and brands across the globe to grow, scale, and reach customers like
          never before. Over 98% of our customers can attest to our success
          rate. When registering on Weventa either as a vendor or affiliate, you
          stand a chance to enjoy the following benefits.
        </span>
        <div
          class="d-flex justify-content-around ml-5"
          style={{ marginTop: 200 }}
        >
          <div>
            <h2 class="adsHeader">Make more Money</h2>
            <ul class="adsText">
              <li>
                As an affiliate, you earn 60% of any successful sales you make.
              </li>
              <li>Loreum ipsum dolor sit amet, consec adipiscing elit.</li>
              <li>Loreum ipsum dolor sit amet, consec adipiscing elit.</li>
              <li>Loreum ipsum dolor sit amet, consec adipiscing elit.</li>
            </ul>
          </div>
          <div>
            <h2 class="adsHeader">Sell more</h2>
            <ul class="adsText">
              <li>
                As a vendor, you get to make more sales as your product gets a
                larger audience.
              </li>
              <li>
                As a vendor, you get to make more sales as your product gets a
                larger audience.
              </li>
              <li>
                As a vendor, you get to make more sales as your product gets a
                larger audience.
              </li>
              <li>
                As a vendor, you get to make more sales as your product gets a
                larger audience.
              </li>
            </ul>
          </div>
          <div>
            <h2 class="adsHeader">Our vast market place</h2>
            <ul class="adsText">
              <li>
                Anything and everything is made available to you at a click.
              </li>
              <li>Loreum ipsum dolor sit amet, consec adipiscing elit.</li>
              <li>Loreum ipsum dolor sit amet, consec adipiscing elit.</li>
              <li>Loreum ipsum dolor sit amet, consec adipiscing elit.</li>
            </ul>
          </div>
        </div>
        <h1 class="whyUsTitle">Hear from our customers</h1>
        <div class="mapHome">
          {/* <div class="marker1"></div>
          <div class="marker2"></div>
          <div class="marker3"></div>
          <div class="marker4"></div>
          <div class="marker5"></div>
          <div class="marker6"></div>
          <div class="marker7"></div>
          <div class="marker8"></div> */}
        </div>
        <div class="faqBox">
          <h1 class="whyUsTitle">Frequently asked questions</h1>
          <div class="faq">
            Weventa is an industry leader in the affiliate marketing space,
          </div>
          <div class="dropDownBorder">
            <h1 class="dropDownBorderText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.?
            </h1>
            <ArrowUpward class="arrowUp" fontSize="small" />
          </div>
          <div class="faq" style={{ width: "50%" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem
            hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id
            cursus dolor urna. Aliquam diam integer vitae eget.{" "}
          </div>
        </div>
      </div>
      <div class='subscribe'><h1 class='subscribeText'>Enter into your world of limitless financial possibilities</h1><button class='subscribeButton'>I'm in</button></div>
    </>
  );
};

const Home = (props) => {
  return (
    <>
      <Header />
      <MainBody />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
