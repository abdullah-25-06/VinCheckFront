import React, { useContext, useState } from "react";
import DataContext from "./context/data";
// import Modal from './Modal'

function Pricing() {
  // const [packages,setpackages]=useState('')

  const ctx = useContext(DataContext);
  return (
    <>
      <body class="mx-auto" id="pricing">
        {/* <!-- starts --> */}
        <section class="wrap-bg container-fluid pb-3 position-relative">
          <img src="./images/bg-top.svg" id="bg-img-top" alt="" />
          <h2 class="text-center pt-4 pb-4" id="pricetag">
            Our Pricing
          </h2>

          <div class="container py-3 position-relative d-flex justify-content-center">
            <div class="row justify-content-center">
              <div
                class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-8 mb-5 text-center sm-px-3"
                id="master"
              >
                <p class="text-center" id="gheading" style={{ color: "white" }}>
                  {ctx.data.length > 0 ? ctx.data[0].title.toUpperCase() : ""
                    //  value=ctx.data[0].title
}

                </p>
                <div class="d-flex align-items-center justify-content-center text-dark mb-3">
                  <span class=""></span>
                  <h1
                    class="price annually animate__bounceIn"
                    id="bprice"
                    style={{ color: "white" }}
                  >
                    {ctx.data.length > 0 ? ctx.data[0].price : ""}
                  </h1>
                  {/* <h1 class="price monthly animate__bounceIn d-none">19.99</h1> */}
                </div>
                <p style={{ color: "white", cursor: "default" }} id="gheading2">
                  1 VEHICLE REPORT
                </p>
                <div class="price-card">
                  <p>Vehicle Specification</p>
                  <p>DMV Title History</p>
                  <p>Safety Recall Status</p>
                  <p>Online Listing History</p>
                  <p>Junk & Salvage Information</p>
                  <p>Accident Information</p>
                </div>
                <a
                  href="/Signupform"
                  class="btn-block btn btn-cute-1 mt-4"
                  id="goldbtn"
                  // type="button"
                  // data-bs-toggle="modal" data-bs-target="#exampleModal"
                  style={{ whiteSpace: "nowrap" }


                  }
                >
                  Sign Up
                </a>
              </div>

              {/* <!-- professional --> */}
              <div
                class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-8 mb-5 text-center sm-px-3"
                id="prof"
              >
                <p class="text-center text-white " id="gheading">
                  {ctx.data.length > 0 ? ctx.data[2].title.toUpperCase() : ""}
                </p>
                <div class="d-flex align-items-center justify-content-center mb-3">
                  <span class="text-white"></span>
                  <h1 class="price text-white annually animate__bounceIn">
                    {ctx.data.length > 0 ? ctx.data[2].price : ""}
                  </h1>
                </div>
                <p style={{ color: "white", cursor: "default" }} id="gheading2">
                  5 VEHICLE REPORT
                </p>
                <div class="price-card">
                  <p>Vehicle Specification</p>
                  <p>DMV Title History</p>
                  <p>Safety Recall Status</p>
                  <p>Online Listing History</p>
                  <p>Junk & Salvage Information</p>
                  <p>Accident Information</p>
                </div>
                <a
                  href="Signupform"
                  class="btn-block btn btn-cute-1 mt-4"
                  id="goldbtn"
                  style={{ whiteSpace: "nowrap" }}
                  type="button"
                  data-bs-toggle="modal" data-bs-target="#exampleModal"
                >
                  Sign Up
                </a>
              </div>

              {/* <!-- master --> */}

              <div
                class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-8 mb-5 text-center sm-px-3"
                id="master"
              >
                <p class="text-center" id="gheading" style={{ color: "white" }}>
                  {ctx.data.length > 0 ? ctx.data[1].title.toUpperCase() : ""}
                </p>
                <div class="d-flex align-items-center justify-content-center  mb-3">
                  <span class=""></span>
                  <h1
                    class="price annually animate__bounceIn"
                    style={{ color: "white" }}
                  >
                    {ctx.data.length > 0 ? ctx.data[1].price : ""}
                  </h1>
                </div>
                <p style={{ color: "white", cursor: "default" }} id="gheading2">
                  2 VEHICLE REPORT
                </p>
                <div class="price-card">
                  <p>Vehicle Specification</p>
                  <p>DMV Title History</p>
                  <p>Safety Recall Status</p>
                  <p>Online Listing History</p>
                  <p>Junk & Salvage Information</p>
                  <p>Accident Information</p>
                </div>
                <a
                  href="Signupform"
                  class="btn-block btn btn-cute-1 mt-4"
                  id="goldbtn"
                  style={{ whiteSpace: "nowrap" }}
                  type="button"
                  data-bs-toggle="modal" data-bs-target="#exampleModal"
                >
                  Sign Up
                </a>

                {/* <a href="#" class="btn-block btn btn-cute mt-4">Learn More</a> */}
              </div>
            </div>
          </div>
          <img src="./images/bg-bottom.svg" id="bg-img-bottom" alt="" />
        </section>
      </body>

      <body class="mx-auto">
        {/* <!-- starts --> */}
        <section class="wrap-bg container-fluid  position-relative">
          <div class="container py-0 position-relative d-flex justify-content-center">
            <div class="row justify-content-center">
              <div
                class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-8 mb-5 text-center sm-px-3"
                id="master"
              >
                <p class="text-center" id="gheading" style={{ color: "white" }}>
                  {ctx.data.length > 0 ? ctx.data[3].title.toUpperCase() : ""}
                </p>
                <div class="d-flex align-items-center justify-content-center text-dark mb-3">
                  <span class=""></span>
                  <h1
                    class="price annually animate__bounceIn"
                    id="bprice"
                    style={{ color: "white" }}
                  >
                    {ctx.data.length > 0 ? ctx.data[3].price : ""}
                  </h1>
                  {/* <h1 class="price monthly animate__bounceIn d-none">19.99</h1> */}
                </div>
                <p style={{ color: "white", cursor: "default" }} id="gheading2">
                  10 VEHICLE REPORT
                </p>
                <div class="price-card">
                  <p>Vehicle Specification</p>
                  <p>DMV Title History</p>
                  <p>Safety Recall Status</p>
                  <p>Online Listing History</p>
                  <p>Junk & Salvage Information</p>
                  <p>Accident Information</p>
                </div>
                <a
                  href="Signupform"
                  class="btn-block btn btn-cute-1 mt-4"
                  id="goldbtn"
                  style={{ whiteSpace: "nowrap" }}
                  type="button"
                  data-bs-toggle="modal" data-bs-target="#exampleModal"
                >
                  Sign Up
                </a>

                {/* <a href="#" class="btn-block btn btn-cute mt-4">Learn More</a> */}
              </div>

              {/* <!-- professional --> */}
              <div
                class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-8 mb-5 text-center sm-px-3"
                id="prof"
              >
                <p class="text-center text-white " id="gheading">
                  {ctx.data.length > 0 ? ctx.data[5].title.toUpperCase() : ""}
                </p>
                <div class="d-flex align-items-center justify-content-center mb-3">
                  <span class="text-white"></span>
                  <h1 class="price text-white annually animate__bounceIn">
                    {ctx.data.length > 0 ? ctx.data[5].price : ""}
                  </h1>
                </div>
                <p style={{ color: "white", cursor: "default" }} id="gheading2">
                  50 VEHICLE REPORT
                </p>
                <div class="price-card">
                  <p>Vehicle Specification</p>
                  <p>DMV Title History</p>
                  <p>Safety Recall Status</p>
                  <p>Online Listing History</p>
                  <p>Junk & Salvage Information</p>
                  <p>Accident Information</p>
                </div>
                <a
                  href="Signupform"
                  class="btn-block btn btn-cute-1 mt-4"
                  id="goldbtn"
                  style={{ whiteSpace: "nowrap" }}
                  type="button"
                  data-bs-toggle="modal" data-bs-target="#exampleModal"
                >
                  Sign Up
                </a>
              </div>

              {/* <!-- master --> */}

              <div
                class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-8 mb-5 text-center sm-px-3"
                id="master"
              >
                <p class="text-center" id="gheading" style={{ color: "white" }}>
                  {ctx.data.length > 0 ? ctx.data[4].title.toUpperCase() : ""}
                </p>
                <div class="d-flex align-items-center justify-content-center  mb-3">
                  <span class=""></span>
                  <h1
                    class="price annually animate__bounceIn"
                    style={{ color: "white" }}
                  >
                    {ctx.data.length > 0 ? ctx.data[4].price : ""}
                  </h1>
                </div>
                <p style={{ color: "white", cursor: "default" }} id="gheading2">
                  25 VEHICLE REPORT
                </p>
                <div class="price-card">
                  <p>Vehicle Specification</p>
                  <p>DMV Title History</p>
                  <p>Safety Recall Status</p>
                  <p>Online Listing History</p>
                  <p>Junk & Salvage Information</p>
                  <p>Accident Information</p>
                </div>
                <a
                  href="Signupform"
                  class="btn-block btn btn-cute-1 mt-4"
                  id="goldbtn"
                  style={{ whiteSpace: "nowrap" }}
                  type="button"
                  data-bs-toggle="modal" data-bs-target="#exampleModal"
                >
                  Sign Up
                </a>

                {/* <a href="#" class="btn-block btn btn-cute mt-4">Learn More</a> */}
              </div>
            </div>
          </div>
          <img src="./images/bg-bottom.svg" id="bg-img-bottom" alt="" />
        </section>
        {/* <Modal /> */}
      </body>
    </>
  );
}

export default Pricing;
