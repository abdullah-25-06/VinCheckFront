import React from "react";
import Pricing from "./Pricing";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import { useEffect } from "react";
function Pricing2() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="navhead container">
        <span className="items col-md-11 mx-auto container">
          <NavLink className="navbar-brand" id="brandname" to="/">
            <p style={{ color: "black" }}>Vincheck Central</p>
          </NavLink>

          <li className="nav-item navbar-nav mt-1">
            <NavLink className="nav-link" id="home" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item navbar-nav mt-1">
            <NavLink className="nav-link" id="home1" to="/Sample">
              Sample report
            </NavLink>
          </li>
          <li className="nav-item navbar-nav mt-1">
            <NavLink className="nav-link" id="home2" to="/pricing">
              Prices
            </NavLink>
          </li>
          <li className="nav-item navbar-nav mt-1">
            <NavLink className="nav-link" id="home3" to="/Login">
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
              style={{ backgroundColor: "black", marginTop: "-3px" }}
            ></span>
            <span
              style={{ backgroundColor: "black", marginTop: "-3px" }}
            ></span>
            <span
              style={{ backgroundColor: "black", marginTop: "-3px" }}
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
                  <img src="p.png" alt="" /> Prices
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

      <Pricing />

      <Footer />
    </>
  );
}

export default Pricing2;
