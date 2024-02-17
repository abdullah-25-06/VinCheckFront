import React, { useRef, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MDBInput, MDBCol, MDBRow, MDBCheckbox } from "mdb-react-ui-kit";
import AuthContext from "./context/auth";
function Signupform() {
  const ctx = useContext(AuthContext);
  const email = useRef();
  const name = useRef();
  const phone = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const FormHandle = async (e) => {
    e.preventDefault();
    const email_val = email.current.value;
    const name_val = name.current.value;
    const phone_val = phone.current.value;
    const password_val = password.current.value;
    if (!email_val || !password_val || !name_val || !phone_val) {
      return alert("All fields are required");
    }
    const val = await ctx.onSignUp(
      email_val,
      password_val,
      phone_val,
      name_val
    );

    if (val.status === 404) {
      return alert(val.msg);
    }

    alert(val.msg);
    navigate("/dashboard");
  };
  return (
    <>
      <div className=" login">
        <div className="navhead">
          <div className="title">
            <NavLink className="nav-link" to="/" style={{ color: "white" }}>
              <p>Vincheck Central</p>
            </NavLink>
          </div>
          <NavLink className="nav-link" to="/Login">
            <div className="log">
              <p style={{ color: "white" }}>Login</p>
            </div>
          </NavLink>
        </div>
        <div className="nborder"></div>

        <div className="logform">
          <div className="formbox ">
            <form onSubmit={FormHandle}>
              <h3 className="pb-1">Signup Form</h3>
              <p>Name</p>
              <MDBInput
                className="mb-3"
                type="text"
                id="form1Example2"
                ref={name}
              />
              <p>Email Adress</p>
              <MDBInput
                className="mb-3"
                type="email"
                id="form1Example2"
                ref={email}
              />
              <p>Phone no</p>
              <MDBInput
                className="mb-3"
                type="text"
                id="form1Example2"
                ref={phone}
              />
              <p>Password</p>
              <MDBInput
                className="mb-3"
                type="password"
                id="form1Example2"
                ref={password}
              />

              <MDBRow className="mb-4">
                <MDBCol className="">
                  <MDBCheckbox id="cursor" label="Remember me" defaultChecked />
                </MDBCol>
              </MDBRow>
              <div className="lbtn">
                <button
                  type="submit"
                  class="btn btn-primary "
                  data-mdb-ripple-init
                  id="loginbtn"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signupform;
