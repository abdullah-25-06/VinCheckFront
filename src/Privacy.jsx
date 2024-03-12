import React from "react";

import { NavLink } from "react-router-dom";
import Aos from "aos";

import { useEffect } from "react";
import Footer from "./Footer";

function Delivery() {
  useEffect(() => {
    Aos.init();
  }, []);
  const scroll = () => {

    window.scrollTo({ top: 0, behavior: 'smooth' });

    
  }

  return (
    <>
          <a id="topbutton" onClick={scroll} href=' '>{""}</a>

      <div className="navhead container">
        <span className="items col-md-11 mx-auto container">
          <NavLink className="navbar-brand" id="brandname" to="/">
            <NavLink
              className="navbar-brand"
              id="brandname"
              to="/"
              data-aos="flip-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
              data-aos-delay="500"
            >
              <img src="glogo.png" alt="" id="wlogo" />
            </NavLink>
          </NavLink>

          <li className="nav-item navbar-nav mt-1">
            <NavLink className="nav-link" id="home" to="/" style={{color:'black'}}>
              Home
            </NavLink>
          </li>
          <li className="nav-item navbar-nav mt-1">
            <NavLink className="nav-link" id="home1" to="/Sample" style={{color:'black'}}>
              Sample report
            </NavLink>
          </li>
          <li className="nav-item navbar-nav mt-1">
            <NavLink className="nav-link" id="home2" to="/pricing" style={{color:'black'}}>
              Prices
            </NavLink>
          </li>
          <li className="nav-item navbar-nav mt-1">
            <NavLink className="nav-link" id="home3" to="/Login" style={{color:'black'}}>
              Customer Login
            </NavLink>
          </li>
        </span>
        <span>
          <label
            className="burger"
            htmlFor="burger "
            type="checkbox"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            aria-controls="offcanvasExample"
            id="burger"
          >
            <input type="checkbox"></input>
            <span
              style={{ backgroundColor: "green", marginTop: "-3px" }}
            ></span>
            <span
              style={{ backgroundColor: "green", marginTop: "-3px" }}
            ></span>
            <span
              style={{ backgroundColor: "green", marginTop: "-3px" }}
            ></span>
          </label>
        </span>
      </div>
      {/* Phone navbar */}
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            VINCHECK CENTRAL
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            id="canvasclose"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div className="content">
            <ul id="ul">
              <a className="nav-link" href="/">
                <li id="li">
                  <img src="house.png" alt="" /> Home
                </li>
              </a>
              <a className="nav-link" href="/Sample">
                <li id="li">
                  <img src="rep.png" alt="" /> Sample report
                </li>
              </a>
              <a className="nav-link" href="/pricing">
                <li id="li">
                  <img src="p.png" alt="" /> Pricing
                </li>
              </a>
              <a className="nav-link" to="Login" href="Login">
                <li id="li">
                  <img src="login.png" alt="" />
                  Customer login
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <h3 id="pr" className="text-center mt-3">
        Our Refund Policy!
      </h3>
      <div className="delivery">
        <div className="dt">
          <p>
            We understand that sometimes circumstances change, and you may need
            to request a refund for your purchase from Vin Check Central. Our
            refund policy allows you to request a refund within 7 days of your
            purchase date. To initiate a refund, please follow these steps:
          </p>
        </div>
      </div>
      <div className="delivery">
        <div className="dt" id="ds">
          <h3>The steps</h3>
        </div>
        <div className="dt">
          <p style={{ lineHeight: "1.9" }}>
            1. Fill out the refund form available on our website. You can find
            the form <a href="/Request"> here</a>.
            <br />
            2. Provide all the required information, including your name, email
            address, order number, and reason for the refund.
            <br />
            3. Once we receive your refund request, our team will review it and
            process your refund within 4-5 business days.
            <br />
            4. If you have purchased single report/bundle of reports, the 7-day
            refund period will start from the day of purchase of that bundle.
            <br />
            5. Once a customer has purchased a bundle of reports and has
            utilized at least one report, any request for a refund after using
            the second report due to dissatisfaction will not be honored. The
            purchase of the bundle is considered final after the use of the
            second report, and no refunds will be provided for the remaining
            reports in the bundle.
            <br />
          </p>
        </div>
      </div>
      <div className="delivery">
        <div className="dt">
          <p>
            Please note that refunds will be issued to the original payment
            method used for the purchase. If you have any questions or need
            assistance with your refund request, please contact our customer
            support team at{" "}
            <a href="/" style={{ cursor: "pointer" }}>
              info@vincheckcentral.com
            </a>
            {/* <a href=""> hello</a> */}
            <br />
            Thank you for choosing Vin Check Central. We value your satisfaction
            and strive to provide excellent service.
          </p>
        </div>
      </div>

      <div className="mt-4">
        <Footer />
      </div>
    </>
  );
}

export default Delivery;
