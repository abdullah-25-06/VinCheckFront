import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import Canvas from "./Canvas";
function Dashboard() {
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
                          VIN Number
                        </label>
                        <input
                          type="text"
                          id="form3Example1"
                          class="form-control"
                          placeholder="Vin number"
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
                          Transaction ID(optional)
                        </label>
                        <input
                          type="text"
                          id="form3Example1"
                          class="form-control"
                          placeholder="Transaction id"
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
                    ></textarea>
                  </div>
                  <div className="reqbtn">
                    <button
                      class="btn btn-success mt-2"
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
