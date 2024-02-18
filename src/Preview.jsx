import React, { useContext, useState } from "react";
import AuthContext from "./context/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Preview() {
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
    try {
      const { data } = await axios.post(
        "http://localhost:8000/detail",
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
  const backBtn=()=>{
    navigate("/dashboard");
  }
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
              <tr class="table-info" id="stable" >
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
          <div>
            <button onClick={btnHandler}>More Detail</button>
            <button onClick={backBtn}>Dashboard</button> {/*navigate*/}
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
