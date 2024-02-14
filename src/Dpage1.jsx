import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate, createSearchParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import AuthContext from "./context/auth";
import DataContext from "./context/data";
import axios from "axios";
import moment from "moment";
import { ColorRing } from "react-loader-spinner";
function Dpage1(props) {
  const ctx = useContext(AuthContext);
  const d_ctx = useContext(DataContext);
  const navigate = useNavigate();
  const [selectPackage, setSelectPackage] = useState(null);
  const [dataArray, setDataArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isData, setIsData] = useState(null);
  const inp = useRef("");
  const selectHandler = (e) => {
    if (0 <= e.target.value <= d_ctx.data.length - 1) {
      setSelectPackage(d_ctx.data[e.target.value]);
    }
  };
  useEffect(() => {
    setSelectPackage(d_ctx.data[0]);
    async function api() {
      try {
        const {
          data: { getreports },
        } = await axios.get("http://localhost:8000/report", {
          headers: {
            "Content-Type": "application/json",
            auth_token: localStorage.getItem("token")
              ? `bearer ${localStorage.getItem("token")}`
              : "",
          },
        });

        setDataArray(getreports);
        if (getreports.length > 0) {
          setIsData(true);
        } else {
          setIsData(false);
        }
        setIsLoading(false);
      } catch (error) {
        if (error.response.status === 401) {
          ctx.onLogout();
          navigate("/");
        }
      }
    }

    api();
    return () => {};
  }, [d_ctx]);
  const data = d_ctx?.data.map((data, index) => {
    return (
      <option value={index} key={index}>
        {data.count} Reports for {data.price}
      </option>
    );
  });
  const row =
    dataArray.length >= 1
      ? dataArray?.map((elem, index) => {
          return (
            <tr key={index}>
              <td colSpan="1" id="colborder">
                {index + 1}
              </td>
              <td colSpan="1" id="colborder">
                {elem.vin}
              </td>
              <td colSpan="1" id="colborder">
                {elem.email}
              </td>
              <td colSpan="1" id="colborder">
                {elem.pending ? "pending" : "delivered"}
              </td>
              <td colSpan="1" id="colborder">
                {moment(elem.createdAt).format("DD MMMM YYYY, HH:mm:ss")}
              </td>
              {localStorage.getItem("admin") ? (
                <td colSpan="1" id="lastcol">
                  Submit
                  <button
                    class="btn btn-success mt-2"
                    style={{ fontSize: "13px" }}
                    onClick={() => {
                      checkHandler(index);
                    }}
                  >
                    Submit
                  </button>
                </td>
              ) : (
                <td colSpan="1" id="lastcol">
                  View Report
                  <button
                    class="btn btn-success mt-2"
                    style={{ fontSize: "13px" }}
                  >
                    View Report
                  </button>
                </td>
              )}
            </tr>
          );
        })
      : "";
  const btnHandler = async () => {
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
  const checkHandler = async (index) => {
    try {
      const dataSample = dataArray[index];
      await axios.put(
        `http://localhost:8000/vindata${dataSample._id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            auth_token: localStorage.getItem("token")
              ? `bearer ${localStorage.getItem("token")}`
              : "",
          },
        }
      );
      setDataArray((prevPosts) =>
        prevPosts.filter((post) => post._id !== dataSample._id)
      );
    } catch (err) {
      alert(err.message);
    }
  };
  const payHandler = () => {
    navigate({
      pathname: "/Order",
      search: createSearchParams({
        id: selectPackage._id,
        currency: selectPackage.currency,
        price: selectPackage.price,
        title: selectPackage.title,
      }).toString(),
    });
  };
  return (
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
        <div className="col-md-4 dcol2">
          <div className="dform1">
            <p>
              <b>Remaining Count:{ctx.count}</b>
            </p>
            <div data-mdb-input-init class="form-outline mb-4">
              <label class="form-label" for="form5Example1">
                VIN Number*
              </label>
              <input
                type="text"
                id="form5Example1"
                class="form-control"
                placeholder="Enter VIN Number"
                ref={inp}
              />
            </div>
            <p>
              You have {ctx.count} remaining credits to view report. Select any
              package below to proceed.
            </p>
            <select
              class="form-control"
              name="package"
              onChange={selectHandler}
              required
            >
              {data}
            </select>
            <button
              class="btn btn-success mt-2"
              style={{ fontSize: "13px" }}
              onClick={btnHandler}
            >
              Check Vehicle Details
            </button>
            <button
              class="btn btn-success mt-2 "
              style={{ fontSize: "13px" }}
              onClick={payHandler}
            >
              Payment
            </button>
            <div key={selectPackage}></div>
          </div>
        </div>
        <div className="col-md-6 dcol3">
          <div class="card">
            <div class="header">
              <h2>All Reports</h2>
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">VIN </th>
                  <th scope="col">Email </th>
                  <th scope="col">Report Status</th>
                  <th scope="col">Date & Time</th>
                  {localStorage.getItem("admin") ? (
                    <th scope="col">Action</th>
                  ) : (
                    <th scope="col">View Report</th>
                  )}
                </tr>
              </thead>
              {isData && <tbody>{row}</tbody>}
            </table>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {!isLoading && !isData && (
                <h2 style={{ textAlign: "center" }}>No Request For Reports </h2>
              )}
              {isLoading && (
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="color-ring-loading"
                  wrapperStyle={{}}
                  wrapperClass="color-ring-wrapper"
                  colors={[
                    "#e15b64",
                    "#f47e60",
                    "#f8b26a",
                    "#abbd81",
                    "#849b87",
                  ]}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dpage1;
