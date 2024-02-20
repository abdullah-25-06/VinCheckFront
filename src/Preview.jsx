import React, { useContext, useState } from "react";
import AuthContext from "./context/auth";

import Typed from "typed.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Preview() {
  // For text animated redring library
  const el = React.useRef(null);
  React.useEffect(() => {
    // const typed = new Typed(el.current, {
    new Typed(el.current, {
      strings: ["To view the complete report, click here."],
      startDelay: 100,
      typeSpeed: 25,
      // backDelay: 40,
      loop: false,
      // backSpeed: 60,
      smartBackspace: true,
    });
  }, []);
  const el2 = React.useRef(null);
  React.useEffect(() => {
    // const typed = new Typed(el2.current, {
    new Typed(el2.current, {
      strings: ["Back to dashboard?"],
      startDelay: 120,
      typeSpeed: 30,
      backDelay: 40,
      loop: false,
      // backSpeed: 60,
      smartBackspace: true,
    });
  }, []);
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);
  const [detail] = useState(ctx.isLoggedIn ? true : false);
  const [car, setCar] = useState();
  if (localStorage.getItem("car_D") && !car) {
    setCar(JSON.parse(localStorage.getItem("car_D")));
  } else {
    navigate("/");
  }
  const btnHandler = async () => {
    if (counter < 0) {
      counter++;
    } else {
      document.getElementById("loginbtn").disabled = true;
    }
    try {
      const { data } = await axios.post(
        "https://vincheck-production.up.railway.app/detail",
        {
          vin: car.vin,
        },
        {
          headers: {
            auth_token: localStorage.getItem("token")
              ? `bearer ${localStorage.getItem("token")}`
              : "",
            "content-type": "application/json",
          },
        }
      );
      ctx.updateCount(data.user.avaliable_counts);
      navigate("/dashboard");
      alert(data.msg);
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };
  const backBtn = () => {
    navigate("/dashboard");
  };
  var counter = 0;
  return (
    <React.Fragment>
      <div className="col-xxl-11 mx-auto sign">
        <div className="stable mt-1">
          <h3> Vechicle Information</h3>
          <table class="table">
            <tbody>
              <tr class="table-info" id="stable">
                <th scope="row">VIN</th>
                <td>{car?.vin}</td>
              </tr>
              <tr class="table-light" id="stable">
                <th scope="row">YEAR</th>
                <td>{car?.year}</td>
              </tr>
              <tr class="table-info" id="stable">
                <th scope="row">MADEIN</th>
                <td>{car?.madeIn}</td>
              </tr>
              <tr class="table-light" id="stable">
                <th scope="row">MODEL</th>
                <td>{car?.model}</td>
              </tr>
              <tr class="table-info" id="stable">
                <th scope="row">ENGINE CYLINDERS</th>
                <td>{car?.engineCylinder}</td>
              </tr>
              <tr class="table-light" id="stable">
                <th scope="row">MAKE</th>
                <td>{car?.make}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {detail ? (
          <div className="sdiv">
            <h2>
              <span ref={el}></span>
            </h2>
            <div className="lbtn">
              <button
                type="submit"
                class="btn btn-primary mt-1 "
                data-mdb-ripple-init
                id="loginbtn"
                onClick={btnHandler}
              >
                Get full report!
              </button>
            </div>
            {/* <button onClick={btnHandler} id="loginbtn" >Get full report </button> */}
            <h2 className="mt-4">
              <span ref={el2}></span>
            </h2>
            <div className="lbtn">
              <button
                type="submit"
                class="btn btn-primary "
                data-mdb-ripple-init
                id="loginbtn"
                onClick={backBtn}
              >
                Dashboard
              </button>
            </div>
            {/* <button onClick={backBtn} id="pbtn">Dashboard</button> navigate */}
          </div>
        ) : (
          <div className="sform">
            <h2 className="text-center" style={{ whiteSpace: "nowrap" }}>
              Get Full Report in 32$
            </h2>
            <h3 className="mb-5" style={{ textAlign: "center" }}>
              SignUp & Get Your Vechicle Report Instantly!
            </h3>
            <form className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-12 mx-auto">
              <div data-mdb-input-init class="form-outline mb-3">
                <label class="form-label" for="form4Example1">
                  Name
                </label>
                <input type="email" id="form4Example1" class="form-control" />
              </div>
              <div data-mdb-input-init class="form-outline mb-3">
                <label class="form-label" for="form4Example1">
                  Email address
                </label>
                <input type="email" id="form4Example1" class="form-control" />
              </div>
              <div data-mdb-input-init class="form-outline mb-3">
                <label class="form-label" for="form4Example1">
                  Phone no
                </label>
                <input type="email" id="form4Example1" class="form-control" />
              </div>
              <div data-mdb-input-init class="form-outline mb-3">
                <label class="form-label" for="form4Example1">
                  Password
                </label>
                <input type="email" id="form4Example1" class="form-control" />
              </div>

              <div className="lbtn">
                <button
                  type="button"
                  class="btn btn-primary "
                  data-mdb-ripple-init
                  id="loginbtn"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default Preview;
