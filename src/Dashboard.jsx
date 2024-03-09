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
    if (!account_id || !transaction_id || !reason) {
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
      alert(data.msg);
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
              <NavLink className="nav-link" to="/">
                <p>Vincheck Central</p>
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
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-9 mx-auto mt-4 mainreq">
              <div className="reqbox">
                <div class="row mb-4">
                  <div className="reqbox2">
                    <div class="col-md-4">
                      <div data-mdb-input-init class="form-outline">
                        <label
                          class="form-label"
                          for="form3Example1"
                          id="reqlabel"
                        >
                          {" "}
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
                    <div class="col-md-5">
                      <div data-mdb-input-init class="form-outline">
                        <label
                          class="form-label"
                          for="form3Example2"
                          id="reqlabel"
                        >
                          Transaction ID
                        </label>
                        <input
                          type="text"
                          id="form3Example1"
                          class="form-control"
                          placeholder="Transaction id"
                          ref={t_id}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 pt-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Example textarea
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="I need a refund because..."
                      ref={reasons}
                    ></textarea>
                  </div>
                  <div className="reqbtn">
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
