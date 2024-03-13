import React, { useContext, useState, useRef, useEffect } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import AuthContext from "./context/auth";
import Typed from "typed.js";
import axios from "axios";
import DataContext from "./context/data";
import Modal from "./Modal";
function Preview() {
  const navigate = useNavigate();
  const d_ctx = useContext(DataContext);
  const [selectPackage, setSelectPackage] = useState(null);
  const ctx = useContext(AuthContext);
  const [detail, setDetail] = useState(ctx.isLoggedIn ? true : false);
  const email = useRef();
  const name = useRef();
  const phone = useRef();
  const password = useRef();
  const vin_data = useRef();
  const [car, setCar] = useState();
  var counter1 = 0;
  
  
  const selectHandler = (e) => {
    if (0 <= e.target.value <= d_ctx.data.length - 1) {
      setSelectPackage(d_ctx.data[e.target.value]);
    }
  };
  if (localStorage.getItem("car_D") && !car) {
    setCar(JSON.parse(localStorage.getItem("car_D")));
  }
  useEffect(() => {
    setSelectPackage(d_ctx.data[0]);
    setDetail(ctx.isLoggedIn ? true : false);
    if (localStorage.getItem("car_D") && !car) {
      setCar(JSON.parse(localStorage.getItem("car_D")));
    }
  }, [d_ctx, ctx, car, detail]);
  const data = d_ctx?.data.map((data, index) => {
    return (
      <option value={index} key={index}>
        {data.count} Reports for {data.price}
      </option>
    );
  });
  const PayPalHandler = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_DEVELOPMENT_URL}/updateVin`,
        {
          vin: car?.vin,
        },
        {
          headers: {
            auth_token: localStorage.getItem("token")
              ? `bearer ${localStorage.getItem("token")}`
              : "",
            "Content-Type": "application/json",
          },
        }
      );
      navigate({
        pathname: "/Order",
        search: createSearchParams({
          id: selectPackage._id,
          currency: selectPackage.currency,
          price: selectPackage.price,
          title: selectPackage.title,
          report: selectPackage.count,
        }).toString(),
      });
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  const FormHandle = async (e) => {
    if (counter1 < 0) {
      counter1++;
    } else {
      document.getElementById("loginbtn").disabled = true;
    }
    e.preventDefault();
    const email_val = email.current.value;
    const name_val = name.current.value;
    const phone_val = phone.current.value;
    const password_val = password.current.value;
    const vin = car?.vin;

    if (!email_val || !password_val || !name_val || !phone_val) {
      document.getElementById("loginbtn").disabled = false;
      return alert("All fields are required");
    }
    const val = await ctx.onSignUp(
      email_val,
      password_val,
      phone_val,
      name_val,
      vin
    );

    if (val.status === 404) {
      document.getElementById("loginbtn").disabled = false;
      return alert(val.msg);
    }

    alert(val.msg);
    navigate({
      pathname: "/Order",
      search: createSearchParams({
        id: selectPackage._id,
        currency: selectPackage.currency,
        price: selectPackage.price,
        title: selectPackage.title,
        report: selectPackage.count,
      }).toString(),
    });
  };
  const el = React.useRef(null);
  React.useEffect(() => {
    detail &&
      new Typed(el.current, {
        strings: ["To view the complete report, click here."],
        startDelay: 100,
        typeSpeed: 25,
        // backDelay: 40,
        loop: false,
        // backSpeed: 60,
        smartBackspace: true,
      });
  }, [detail]);
  const el2 = React.useRef(null);
  React.useEffect(() => {
    detail &&
      new Typed(el2.current, {
        strings: ["Back to dashboard?"],
        startDelay: 120,
        typeSpeed: 30,
        backDelay: 40,
        loop: false,
        // backSpeed: 60,
        smartBackspace: true,
      });
  }, [detail]);

  const btnHandler = async () => {
    if (counter < 0) {
      counter++;
    } else {
      document.getElementById("loginbtn").disabled = true;
    }
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_DEVELOPMENT_URL}/detail`,
        {
          vin: car?.vin,
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
      if (error.response.status === 401) {
        localStorage.removeItem("IsloggedIn");
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("count");
        ctx.isLoggedIn = false;
        ctx.username = "";
        ctx.count = 0;
        navigate("/");
      }
      alert(error.response.data.error);
    }
  };
  const backBtn = () => {
    navigate("/dashboard");
  };
  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  var counter = 0;

  return (
    <React.Fragment>
      <span id="topbutton" onClick={scroll}>
        {""}
      </span>

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
                <th scope="row">MAKE</th>
                <td>{car?.make}</td>
              </tr>
              <tr class="table-light" id="stable">
                <th scope="row">MODEL</th>
                <td>{car?.model}</td>
              </tr>
              <tr class="table-info" id="stable">
                <th scope="row">Type</th>
                <td>{car?.type}</td>
              </tr>
              <tr class="table-light" id="stable">
                <th scope="row">COLOR</th>
                <td>{car?.color}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {detail ? (
          <div className="sdiv">
            <h2>
              <span ref={el}></span>
            </h2>
            {ctx.count !== "0" ? (
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
            ) : (
              <div>
                <div data-mdb-input-init class="form-outline mb-3">
                  <label class="form-label" for="form4Example1">
                    Packages (Select you package below)
                    <img
                      src="select.png"
                      alt=""
                      style={{ marginLeft: "3px" }}
                    />
                  </label>
                  <select
                    class="form-control"
                    name="package"
                    onChange={selectHandler}
                    required
                    style={{ width: "300px" }}
                  >
                    {/* <img src="select.png"></img> */}
                    {data}
                  </select>
                </div>
                <div className="lbtn" style={{ whiteSpace: "nowrap" }}>
                  <button
                    type="submit"
                    class="btn btn-primary mt-1 "
                    data-mdb-ripple-init
                    id="loginbtn"
                    style={{ padding: "8px 10px 8px 10px", width: "200px" }}
                    onClick={PayPalHandler}
                  >
                    Proceed To Payment
                  </button>
                </div>
              </div>
            )}
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
          </div>
        ) : (
          <div className="sform">
            <h2 className="text-center" style={{ whiteSpace: "nowrap" }}>
              Get Full Report in 32$
            </h2>
            <h3 className="mb-5" style={{ textAlign: "center" }}>
              SignUp & Get Your Vechicle Report Instantly!
            </h3>
            <form
              onSubmit={FormHandle}
              className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-12 mx-auto"
            >
              <div data-mdb-input-init class="form-outline mb-2">
                <label class="form-label" for="form4Example1">
                  Name
                </label>
                <input
                  ref={name}
                  type="text"
                  id="form4Example1"
                  class="form-control"
                />
              </div>
              <div data-mdb-input-init class="form-outline mb-2">
                <label class="form-label" for="form4Example1">
                  Email address
                </label>
                <input
                  ref={email}
                  type="email"
                  id="form4Example1"
                  class="form-control"
                />
              </div>
              <div data-mdb-input-init class="form-outline mb-2">
                <label class="form-label" for="form4Example1">
                  Phone no
                </label>
                <input
                  ref={phone}
                  type="text"
                  id="form4Example1"
                  class="form-control"
                />
              </div>
              <div data-mdb-input-init class="form-outline mb-2">
                <label class="form-label" for="form4Example1">
                  Vin Number
                </label>
                <input
                  ref={vin_data}
                  type="text"
                  id="form4Example1"
                  class="form-control"
                  value={car?.vin}
                  disabled="true"
                />
              </div>
              <div data-mdb-input-init class="form-outline mb-2">
                <label class="form-label" for="form4Example1">
                  Packages (Select your package below)
                  <img src="select.png" alt="" style={{ marginLeft: "3px" }} />
                </label>
                <select
                  class="form-control"
                  name="package"
                  onChange={selectHandler}
                  required
                >
                  {data}
                </select>
              </div>
              <div data-mdb-input-init class="form-outline mb-2">
                <label class="form-label" for="form4Example1">
                  Password
                </label>
                <input
                  ref={password}
                  type="password"
                  id="form4Example1"
                  class="form-control"
                />
              </div>

              <div
                className="lbtn"
                style={{ width: "minContent", whiteSpace: "nowrap" }}
              >
                <button
                  type="submit"
                  class="btn btn-primary "
                  data-mdb-ripple-init
                  id="loginbtn"
                  style={{ padding: "10px 5px 10px 5px" }}
                >
                  Proceed To Payment
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      <Modal />
    </React.Fragment>
  );
}

export default Preview;
