import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import Resizable from "./Slick";
import Pricing from "./Pricing";
import Faqs from "./Faqs";
import Details from "./Details";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Form from "./Form";
import Automation from "./Automation";
import Source from "./Source";
function Main() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />
      <div className="hero col-xxl-12 col-md-12 col-sm-12 mx-auto">
        <div className="wrapper col-xxl-11 col-xl-11 col-sm-10 mx-auto">
          <div className="col-xxl-6 col-xl-7 col-lg-7 col-md-10 col-sm-5 col1">
            <img id="carimg" src="c5r.png" alt="" srcset="" />
            <span className="phone">
              <img src="pr.png" alt="" />
            </span>
          </div>
          <Form />
        </div>
        <Details />
        <Source />
        <Automation />
        {/* data-aos="fade-right" down */}
        <div
          className="col-xxl-11 col-xl-11 col-lg-11 col-md-12 col-sm-12 mx-auto coments"
          data-aos="fade-right"
        >
          <img src="q2.png" id="qimg" alt="" srcset="" />
          <h2>
            What our customers have to say
            <br />
            about us
          </h2>
        </div>
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-11 mx-auto testimonials">
          <Resizable />
        </div>
        <div
          className="col-xxl-12 col-xl-12 col-1g-12 col-md-12 mx-auto  pricingdiv"
          id="pricing"
          data-aos="fade-up"
        >
          <Pricing />
        </div>
        <div className="col-xxl-11  mx-auto questions">
          <Faqs />
        </div>
        <div className="end">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Main;
