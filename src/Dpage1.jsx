import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import AuthContext from "./context/auth";
import DataContext from "./context/data";
import axios from "axios";
import moment from "moment";
import Canvas from "./Canvas";
import { ColorRing } from "react-loader-spinner";
function Dpage1(props) {
  const ctx = useContext(AuthContext);
  const d_ctx = useContext(DataContext);
  const navigate = useNavigate();
  // const [selectPackage, setSelectPackage] = useState(null);
  const [dataArray, setDataArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [setQuery] = useState("");
  const [isData, setIsData] = useState(null);
  const [transaction, SetTransactions] = useState(null);
  const inp = useRef("");
  // const selectHandler = (e) => {
  //   if (0 <= e.target.value <= d_ctx.data.length - 1) {
  //     setSelectPackage(d_ctx.data[e.target.value]);
  //   }
  // };
  useEffect(() => {
    // setSelectPackage(d_ctx.data[0]);
    async function api() {
      try {
        const {
          data: { getreports },
        } = await axios.get(`${process.env.REACT_APP_DEVELOPMENT_URL}/report`, {
          headers: {
            "Content-Type": "application/json",
            auth_token: localStorage.getItem("token")
              ? `bearer ${localStorage.getItem("token")}`
              : "",
          },
        });

        setDataArray(getreports);
        if (getreports && getreports.length > 0) {
          setIsData(true);
        } else {
          setIsData(false);
        }
        setIsLoading(false);
      } catch (error) {
        if (error.response.status === 401) {
          localStorage.removeItem("IsloggedIn");
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          localStorage.removeItem("count");
          localStorage.removeItem("admin");
          ctx.isLoggedIn = false;
          ctx.username = "";
          ctx.count = 0;
          navigate("/");
        }
      }
    }
    async function trans() {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_DEVELOPMENT_URL}/transaction`,
          {
            headers: {
              "Content-Type": "application/json",
              auth_token: localStorage.getItem("token")
                ? `bearer ${localStorage.getItem("token")}`
                : "",
            },
          }
        );

        SetTransactions(data.transactionData);
      } catch (error) {
        if (error.response?.status === 401) {
          localStorage.removeItem("IsloggedIn");
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          localStorage.removeItem("count");
          localStorage.removeItem("admin");
          ctx.isLoggedIn = false;
          ctx.username = "";
          ctx.count = 0;
          navigate("/");
        }
      }
    }

    trans();
    api();

    return () => {};
  }, [d_ctx, ctx, navigate, SetTransactions]);

  // const data = d_ctx?.data.map((data, index) => {
  //   return (
  //     <option value={index} key={index}>
  //       {data.count} Reports for {data.price}
  //     </option>
  //   );
  // });
  const transData = (
    <tr>
      <td colSpan="1" id="colborder">
        {0 + 1}
      </td>
      <td colSpan="1" id="colborder">
        {transaction?.order_id}
      </td>
      <td colSpan="1" id="colborder">
        {transaction?.amount?.value}$
      </td>
      <td className="text-center">
        {transaction?.refunded === true ? (
          <img
            id="tcheck"
            src="tick.png"
            alt=""
            style={{ width: "18px", height: "18px" }}
          />
        ) : (
          <td className="text-center">
            <img
              id="tcheck2"
              src="cross.png"
              alt=""
              style={{
                width: "18px",
                height: "18px",
                marginLeft: "10px",
              }}
            />
          </td>
        )}
      </td>
    </tr>
  );

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
              <td
                colSpan="1"
                id="colborder"
                style={{ whiteSpace: "wrap", wordBreak: "break-all" }}
              >
                {elem.email}
              </td>
              <td colSpan="1" id="colborder">
                {elem.pending ? "pending" : "delivered"}
              </td>
              <td
                colSpan="1"
                id="colborder"
                style={{ whiteSpace: "wrap", wordBreak: "break-all" }}
              >
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
    document.getElementById("vinBtn").disabled = true;
    if (!val) {
      document.getElementById("vinBtn").disabled = false;
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
      document.getElementById("vinBtn").disabled = false;
      alert(err.response.data.error);
    }
  };
  const checkHandler = async (index) => {
    try {
      const dataSample = dataArray[index];
      await axios.put(
        `${process.env.REACT_APP_DEVELOPMENT_URL}/vindata${dataSample._id}`,
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
      // setDataArray((prevPosts) =>
      //   prevPosts.filter((post) => post._id !== dataSample._id)
      // );
    } catch (err) {
      alert(err.message);
    }
  };
  // const payHandler = async () => {
  //   try {
  //     await axios.get(`${process.env.REACT_APP_DEVELOPMENT_URL}/check`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         auth_token: localStorage.getItem("token")
  //           ? `bearer ${localStorage.getItem("token")}`
  //           : "",
  //       },
  //     });
  //     navigate({
  //       pathname: "/Order",
  //       search: createSearchParams({
  //         id: selectPackage._id,
  //         currency: selectPackage.currency,
  //         price: selectPackage.price,
  //         title: selectPackage.title,
  //         report: selectPackage.count,
  //       }).toString(),
  //     });
  //   } catch (err) {
  //     alert(err.response.data.msg);
  //   }
  // };
  const scroll = () => {

    window.scrollTo({ top: 0, behavior: 'smooth' });

    
  }


  return (
    <>
          <a id="topbutton" onClick={scroll}></a>

      <div className="dashboard">
        <div className="head">
          <div className="navhead">
            <div className="title">
              <NavLink
                className="navbar-brand"
                id="brandname"
                to="/"
                data-aos="flip-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
                data-aos-delay="500"
              >

                <img src="glogo.png" alt="" id="wlogo" style={{ marginLeft: '10px', width: "180px", marginBottom: '15px' }} />
                <img
                  src="glogo.png"
                  alt=""
                  id="wlogo"
                  style={{
                    marginLeft: "10px",
                    width: "180px",
                    marginBottom: "15px",
                  }}
                />

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
          <div className="col-xxl-4 col-xl-4 col-lg-3 col-md-12 mx-auto dcol2">
            <div className="dform1">
              <p>
                <b>Remaining Count:{ctx.count}</b>
              </p>

              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form5Example1" id="ft">
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
              <p id="ftext">
                You have {ctx.count} remaining credits to view report. Select
                any package below to proceed.
              </p>

              <button
                onClick={btnHandler}
                class="btn btn-success mt-2"
                id="vinBtn"
                style={{ border: "none" }}
              >
                Check Vehicle Details
              </button>
            </div>
            <div className="dform1 mt-1" id="sectable">
              <div className="tablecontainer" style={{ height: "20vh" }}>
                <table class="table" style={{ padding: "5px" }}>
                  <thead>
                    <tr>
                      <th scope="col" id="colb">
                        #
                      </th>
                      <th scope="col" id="colb">
                        Transaction ID{" "}
                      </th>

                      <th scope="col" id="colb">
                        Amount
                      </th>
                      <th scope="col" id="colb">
                        Refund
                      </th>
                    </tr>
                  </thead>
                  <tbody>{transaction && transData}</tbody>
                </table>
                {transaction ? (
                  null
                ) : (
                  <h6 style={{ textAlign: "center" }}>
                    No Transactions
                  </h6>
                )}
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6  col-lg-7 col-md-12 dcol3">
            <div class="card" id="dpage1table">
              <div class="header">
                <div className="headerhead">

                  <div className="headerhead2">
                    <h2>All Reports</h2>
                    {/* <div style={{display:"flex",gap:'10px'}}>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <p style={{fontSize:'13px'}}>ALL</p>
                         
                      </div>
                    </div> */}
                    <div class="form-check form-check-inline">
                      <input class="form-check-input " type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                      <label class="form-check-label" for="inlineRadio1" style={{ fontSize: '13px' }}>All</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                      <label class="form-check-label" for="inlineRadio2" style={{ fontSize: '13px' }}>Pending</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                      <label class="form-check-label" for="inlineRadio3" style={{ fontSize: '13px' }}>Delivered </label>
                    </div>
                  </div>
                  <div style={{display:"flex",flexDirection:'column',padding:'0px',margin:'0px',gpa:'0px'}}>

                    <p style={{ fontSize: '13px',marginBottom:'2px', textAlign:'end' }}>Total Reports:10</p>
                    <input
                      type="search"
                      placeholder=" Search VIN..."
                      id="tsearch"
                    />
                  </div>
                  <h2>All Reports</h2>
                  <input
                    type="search"
                    placeholder=" Search VIN..."
                    id="tsearch"
                    // onClick={(e) => setQuery(e.target.value)}
                  />

                </div>
              </div>
              <div className="tablecontainer">
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
                    <h2 style={{ textAlign: "center" }}>
                      No Request For Reports{" "}
                    </h2>
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
      </div>
      <Canvas />
    </>
  );
}

export default Dpage1;
