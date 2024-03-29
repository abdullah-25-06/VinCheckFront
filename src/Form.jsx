import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Form() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const c_inp = useRef();
  const num1 = getRandomInt(10) + 1;
  const num2 = getRandomInt(9) + 1;
  const inp = useRef();
  const navigate = useNavigate();
  let counter = 0;
  const clickHandler = async () => {
    if (counter < 0) {
      counter++;
    } else {
      document.getElementById("pbtn").disabled = true;
    }
    const val = inp.current.value;
    if (num1 + num2 !== +c_inp.current.value) {
      document.getElementById("pbtn").disabled = false;
      return alert("Invalid Captcha");
    }
    if (!val) {
      document.getElementById("pbtn").disabled = false;
      return alert("Enter a valid Vin");
    }
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_DEVELOPMENT_URL}/vindata?vin=${val}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      localStorage.setItem("car_D", JSON.stringify(data.data));

      navigate({
        pathname: "/Preview",
      });
    } catch (err) {
      document.getElementById("pbtn").disabled = false;
      alert(err.response.data.error);
    }
  };

  return (
    <>
      <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-7 col-sm-8 mx-auto col2">
        <div className="col-md-11 col-sm-11 mx-auto wform pb-4">
          <h3 className="text-center">Full Vehicle History Report</h3>
          <h5 className="text-center">Find any vehicle by VIN</h5>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter VIN to Search"
            ref={inp}
          />
          <p className="text-center pt-2 wformp">Example: 1VXBR12EXCP901213</p>
          <h5 className="text-center captcha">Solve Captcha</h5>
          <div className="col-md-11 mx-auto inputgroup">
            <div className="captcha">
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput2"
                placeholder="Answer"
                ref={c_inp}
              ></input>
            </div>
            <div className="box">
              <div>
                <p className="boxp">
                  {num1}+{num2}=
                </p>
              </div>
            </div>
          </div>
          <div className="searchbtn">
            <div className="parabutton">
              <button id="pbtn" onClick={clickHandler}>
                <span>SEARCH</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
