import { React, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "./context/auth";

function Canvas() {
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);
  const signOutHandler = async () => {
    const val = await ctx.onLogout();
    if (val.status === 403) return alert(val.msg);
    navigate("/");
  };
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
                  <img src="home.png" alt="pic" />
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
                  <img src="chat.png" alt="pic" />
                  <a className="nav-link" href="https://tawk.to/chat/65cbbfd80ff6374032cd1d4c/1hmhuapn4" target="_blank " rel="noreferrer">
                    <span id="spam">Live Chat</span>
                  </a>
                </button>
                <button type="button" id="sbutton">
                  <img src="efund.png" alt="pic" />
                  <NavLink className="nav-link" to="/Request">
                    <span id="spam">Request Refund</span>
                  </NavLink>
                </button>
                <p
                  style={{ fontSize: "15px", padding: "0", marginLeft: "10px" }}
                >
                  Authentication
                </p>
                <button type="button" id="sbutton">
                  <img src="use.png" alt="pic" />
                  <NavLink className="nav-link" to="/Profile">
                    <span id="spam">Profile</span>
                  </NavLink>
                </button>
                <button type="button" id="sbutton" onClick={signOutHandler}>
                  <img src="signout.png" alt="pic" />
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
