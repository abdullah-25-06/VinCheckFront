import React, { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";

function Loginform() {
  const phone = useRef();
  const name = useRef();
  const old_password = useRef();
  const new_password = useRef();
  const navigate = useNavigate();

  const formHandler = async (e) => {
    const phone_val = phone.current.value;
    const name_val = name.current.value;
    const oldP_val = old_password.current.value;
    const newP_val = new_password.current.value;
    e.preventDefault();
    if (!phone_val || !name_val || !newP_val || !oldP_val) {
      return alert("Please fillout whole form");
    }
    try {
      const { data } = await axios.put(
        "http://localhost:8000/profile/",
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
      console.log(err.response.data.message);
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
          </div>
          <div className="nborder"></div>
        </div>
        <div className="dbody">
          <Sidebar />
          <div className="reqform">
            <h1>Account Information</h1>
            <div className="col-md-8 mx-auto mainre2 mt-4">
              <div className="reqbox ">
                <div class="row mb-4 mt-4">
                  <form onSubmit={formHandler} >
                    <div class="col">
                      <div data-mdb-input-init class="form-outline">
                        <label
                          class="form-label"
                          htmlfor="form3Example1"
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
                          htmlfor="form3Example2"
                          id="reqlabel"
                        >
                          Phone
                        </label>
                        <input
                          type="text"
                          id="form3Example1"
                          class="form-control"
                          placeholder="Enter your Phone Number"
                          ref={phone}
                        />
                      </div>
                    </div>
                    <div className="row pt-3">
                      <div class="col">
                        <div data-mdb-input-init class="form-outline">
                          <label
                            class="form-label"
                            htmlfor="form3Example1"
                            id="reqlabel"
                          >
                            {" "}
                            Current Password
                          </label>
                          <input
                            type="password"
                            id="form3Example1"
                            class="form-control"
                            placeholder="Enter current password"
                            ref={old_password}
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div data-mdb-input-init class="form-outline">
                          <label
                            class="form-label"
                            htmlfor="form3Example2"
                            id="reqlabel"
                          >
                            New Password
                          </label>
                          <input
                            type="password"
                            id="form3Example1"
                            class="form-control"
                            placeholder="Enter new passowrd"
                            ref={new_password}
                          />
                        </div>
                      </div>
                      {/* <div className="reqbtn">
                      <button
                        class="btn btn-success mt-4"
                        style={{ fontSize: "13px", width: "5rem" }}
                      type="submit" >
                        Save
                      </button>
                    </div> */}
                    </div>
                    <button
                      //   className="btn btn-success mt-4"
                      style={{ fontSize: "13px", width: "5rem" }}
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginform;
