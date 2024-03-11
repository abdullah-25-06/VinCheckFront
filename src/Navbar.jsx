import React, { useEffect } from "react";

import Aos from "aos";

import { NavLink } from "react-router-dom";

function Navbar() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="navhead container">
        <span className="items col-md-11 mx-auto container">
          {/* <NavLink className="navbar-brand" id="brandname" to="/" data-aos='flip-left' data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500"
                        data-aos-delay="500">Vincheck Central</NavLink> */}
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
            <img src="wlogo.png" alt="" id="wlogo" />
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
              Pricing
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
            data-aos="zoom-up"
            data-aos-offset="500"
            data-aos-duration="500"
            data-aos-delay="500"
            type="checkbox"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            aria-controls="offcanvasExample"
            id="burger"
          >
            <input type="checkbox"></input>
            <span className=""></span>
            <span className=""></span>
            <span className=""></span>
          </label>
        </span>
      </div>
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
    </>
  );
}

export default Navbar;
