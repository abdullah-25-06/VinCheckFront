import React, { useContext, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Canvas from "./Canvas";
import axios from "axios";
import AuthContext from "./context/auth";

function Dashboard() {
  const ctx = useContext(AuthContext);
  var counter = 0;
  const a_id = useRef("");
  const number = useRef("");
  const name = useRef("");
  const email = useRef("");
  const city = useRef("");
  const t_id = useRef("");
  const reasons = useRef("");
  const navigate = useNavigate();
  const btnHandle = async () => {
    if (counter < 0) {
      counter++;
    } else {
      document.getElementById("loginbtn").disabled = true;
    }
    const account_id = a_id.current.value;
    const transaction_id = t_id.current.value;
    const reason = reasons.current.value;
    const number_ref = number.current.value;
    const name_ref = name.current.value;
    const email_ref = email.current.value;
    if (
      !account_id ||
      !transaction_id ||
      !reason ||
      !number_ref ||
      !email_ref ||
      !name_ref
    ) {
      document.getElementById("loginbtn").disabled = false;
      return alert("Please fill your fields");
    }
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_DEVELOPMENT_URL}/refund`,
        {
          account_id,
          transaction_id,
          reason,
          number_ref,
          email_ref,
          name_ref,
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
      document.getElementById("loginbtn").disabled = false;
      ctx.updateCount(data.user);

      return alert(data.msg);
    } catch (error) {
      document.getElementById("loginbtn").disabled = false;
      if (error.response?.status === 401) {
        localStorage.removeItem("IsloggedIn");
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("count");
        localStorage.removeItem("admin");
        ctx.isLoggedIn = false;
        ctx.username = "";
        ctx.count = 0;
        navigate("/");
      }

      alert(error.response.data.msg);
    }
  };
  return (
    <>
      <div className="dashboard">
        <div className="head">
          <div className="navhead">
            <div className="title">
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
                <img
                  src="glogo.png"
                  alt=""
                  id="wlogo"
                  style={{
                    marginLeft: "10px",
                    width: "180px",
                    marginBottom: "15px",
                  }}
                />
              </NavLink>
            </div>
            <a
              class="btn btn-primary mb-2"
              id="cbtn"
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
            >
              <img src="ham.png" alt="" sizes="" srcset="" />
            </a>
          </div>
          <div className="nborder"></div>
        </div>
        <div className="dbody">
          <Sidebar />
          <div className="reqform">
            <h1 style={{ color: "white" }}>Refund Application</h1>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-11 mx-auto mt-4 mainreq">
              <div className="reqbox">
                <div class="row mb-4">
                  <div className="reqbox2">
                    <div
                      className="pt-3"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <div class="col">
                        <div data-mdb-input-init class="form-outline">
                          <label
                            class="form-label"
                            for="form3Example1"
                            id="reqlabel"
                          >
                            Fullname
                          </label>
                          <input
                            type="text"
                            id="form3Example1"
                            class="form-control"
                            placeholder="Full name"
                            ref={name}
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div data-mdb-input-init class="form-outline">
                          <label
                            class="form-label"
                            for="form3Example1"
                            id="reqlabel"
                          >
                            Email Address
                          </label>
                          <input
                            type="text"
                            id="form3Example"
                            class="form-control"
                            placeholder="Email Address"
                            ref={email}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="pt-2"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    <div class="col">
                      <div data-mdb-input-init class="form-outline">
                        <label
                          class="form-label"
                          for="form3Example1"
                          id="reqlabel"
                        >
                          Phone number
                        </label>
                        <input
                          type="text"
                          id="form3Example1"
                          class="form-control"
                          placeholder="Phone number "
                          ref={number}
                        />
                      </div>
                    </div>
                    <div class="col">
                      <div data-mdb-input-init class="form-outline">
                        <label
                          class="form-label"
                          for="form3Example1"
                          id="reqlabel"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          id="form3Example"
                          class="form-control"
                          placeholder="City"
                          ref={city}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="pt-2"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    <div class="col">
                      <div data-mdb-input-init class="form-outline">
                        <label
                          class="form-label"
                          for="form3Example1"
                          id="reqlabel"
                        >
                          PayPal Account ID
                        </label>
                        <input
                          type="text"
                          id="form3Example1"
                          class="form-control"
                          placeholder="Ex: Z5H7DMJMUY863"
                          ref={a_id}
                        />
                      </div>
                    </div>
                    <div class="col">
                      <div data-mdb-input-init class="form-outline">
                        <label
                          class="form-label"
                          for="form3Example1"
                          id="reqlabel"
                        >
                          Transaction ID
                        </label>
                        <input
                          type="text"
                          id="form3Example"
                          class="form-control"
                          placeholder="Transaction id"
                          ref={t_id}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pt-2">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      I need a refund because?
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="I need a refund because..."
                      ref={reasons}
                    ></textarea>
                  </div>
                  <div className="reqbtn mt-2">
                    <button
                      onClick={btnHandle}
                      class="btn btn-success mt-2"
                      id="loginbtn"
                      style={{ fontSize: "13px" }}
                    >
                      Request a refund
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Canvas />
    </>
  );
}

export default Dashboard;
