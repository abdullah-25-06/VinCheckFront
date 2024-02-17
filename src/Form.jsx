import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Form() {
  const inp = useRef();
  const navigate = useNavigate();
  const clickHandler = async () => {
    const val = inp.current.value;

    if (!val) return alert("Enter a valid Vin");
    try {
      const data = await axios.get(`http://localhost:8000/vindata?vin=${val}`, {
        headers: { "Content-Type": "application/json" },
      });
      localStorage.setItem("car_D", JSON.stringify(data.data));

      navigate({
        pathname: "/Preview",
      });
    } catch (err) {
      alert(err.message);
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
          <p className='text-center pt-2 wformp'>Example: 1VXBR12EXCP901213</p>
          <h5 className="text-center captcha">Solve Captcha</h5>
          <div className="col-md-11 mx-auto inputgroup">
            <div className="captcha">
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput2"
                placeholder="Answer"
              ></input>
            </div>
            <div className="box">
              <div>
                <p className="boxp">4+1=</p>
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
