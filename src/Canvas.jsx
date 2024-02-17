import React from "react";
import { NavLink } from "react-router-dom";

function Canvas() {
  return (
    <>
      <div className="can">
        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div class="offcanvas-header ">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">
              MENU
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div className="content">
              <nav class="sidebar-menu">
                {/* </button> */}
                <p
                  style={{
                    fontSize: "15px",
                    paddingTop: "",
                    marginLeft: "10px",
                  }}
                >
                  Main
                </p>
                <button type="button" id="sbutton">
                  <img src="home.png" alt="" />
                  <NavLink className="nav-link" to="/Dashboard">
                    <span id="spam">Dashboard</span>
                  </NavLink>
                </button>
                <p
                  style={{ fontSize: "15px", padding: "0", marginLeft: "10px" }}
                >
                  Get Help
                </p>
                <button type="button" id="sbutton">
                  <img src="efund.png" />
                  <NavLink className="nav-link" to="/Request">
                    <span id="spam">Request Refund</span>
                  </NavLink>
                </button>
                <button type="button" id="sbutton">
                  <img src="chat.png" />
                  <NavLink className="nav-link" to="/Chat">
                    <span id="spam">Live Chat</span>
                  </NavLink>
                  {/* <span>Live Chat</span> */}
                </button>

                <p
                  style={{ fontSize: "15px", padding: "0", marginLeft: "10px" }}
                >
                  Authentication
                </p>
                <button type="button" id="sbutton">
                  <img src="use.png" />
                  <NavLink className="nav-link" to="/Profile">
                    <span id="spam">Profile</span>
                  </NavLink>
                </button>
                <button type="button" id="sbutton">
                  <img src="signout.png" />

                  <NavLink className="nav-link" to="/Profile">
                    <span id="spam">Sign Out</span>
                  </NavLink>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Canvas;
