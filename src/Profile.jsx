import React, { useRef, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";
import Canvas from "./Canvas";
import AuthContext from "./context/auth";
function Loginform() {
  const ctx = useContext(AuthContext);
  const phone = useRef();
  const name = useRef();
  const old_password = useRef();
  const new_password = useRef();
  const navigate = useNavigate();

  const btnHandler = async (e) => {
    const phone_val = phone.current.value;
    const name_val = name.current.value;
    const oldP_val = old_password.current.value;
    const newP_val = new_password.current.value;
    e.preventDefault();
    if (!phone_val || !name_val || !newP_val || !oldP_val) {
      return alert("Please fillout whole form");
    }
    try {
      await axios.put(
        "https://vincheck-production.up.railway.app/profile/",
        {
          username: name_val,
          password: newP_val,
          phoneno: phone_val,
        },
        {
          headers: {
            "Content-Type": "application/json",
            auth_token: localStorage.getItem("token")
              ? `bearer ${localStorage.getItem("token")}`
              : "",
          },
        }
      );
      alert("Your Information has been updated successfully ");
      navigate("/Dashboard");
    } catch (err) {
      if (err.response.status === 401) {
        localStorage.removeItem("IsloggedIn");
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("count");
        ctx.isLoggedIn = false;
        ctx.username = "";
        ctx.count = 0;
        navigate("/");
      }
      alert(err.response.data.message);
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
            <h1 style={{ color: "white" }}>Account Information</h1>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-9 mx-auto mainre2 mt-4">
              <div className="reqbox ">
                <div class="row ">
                  <div
                    className="pt-2 pb-1"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <div class="col">
                      <div data-mdb-input-init class="form-outline">
                        <label
                          class="form-label"
                          for="form3Example1"
                          id="reqlabel"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="form3Example1"
                          class="form-control"
                          placeholder="Enter your name"
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
                          Phone
                        </label>
                        <input
                          type="text"
                          id="form3Example"
                          class="form-control"
                          placeholder="Enter your Phone Number"
                          ref={phone}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="pt-3"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <div class="col">
                      <div data-mdb-input-init class="form-outline">
                        <label
                          class="form-label"
                          for="form3Example1"
                          id="reqlabel"
                        >
                          {" "}
                          Current Password
                        </label>
                        <input
                          type="text"
                          id="form3Example1"
                          class="form-control"
                          placeholder="Current password"
                          ref={old_password}
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
                          {" "}
                          New Password
                        </label>
                        <input
                          type="text"
                          id="form3Example"
                          class="form-control"
                          placeholder="New password"
                          ref={new_password}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="reqbtn">
                    <button
                      class="btn btn-success mt-4"
                      style={{ fontSize: "13px", width: "5rem" }}
                      onClick={btnHandler}
                    >
                      Save
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

export default Loginform;
