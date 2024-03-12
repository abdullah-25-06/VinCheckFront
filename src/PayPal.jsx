import React, { useContext, useEffect } from "react";
import AuthContext from "./context/auth";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { NavLink } from "react-router-dom";
import axios from "axios";
function Paypal(props) {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  const initialOptions = {
    clientId:
      "ARyJGaBPIOJstrE2W7e8EHlO6_X9yku5Oe-8qYWh5CHsx6wv8YSxxRHmUkQBsYGwzMpyQ1XxZ277cO8h",
    intent: "capture",
    currency: "USD",
  };
  const [queryParameters] = useSearchParams();
  const id = queryParameters.get("id");
  const currency = queryParameters.get("currency");
  const price = queryParameters.get("price");
  const title = queryParameters.get("title");
  const report = queryParameters.get("report");
  useEffect(() => {
    async function call() {
      try {
        await axios.get(`${process.env.REACT_APP_DEVELOPMENT_URL}/check`, {
          headers: {
            "Content-Type": "application/json",
            auth_token: localStorage.getItem("token")
              ? `bearer ${localStorage.getItem("token")}`
              : "",
          },
        });
      } catch (err) {
        alert(err.response.data.msg);
        navigate("/dashboard");
      }
    }
    call();
  }, [navigate]);
  const createOrder = (data) => {
    return fetch(`${process.env.REACT_APP_DEVELOPMENT_URL}/api/orders`, {
      method: "POST",
      headers: {
        auth_token: localStorage.getItem("token")
          ? `bearer ${localStorage.getItem("token")}`
          : "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: id,
      }),
    })
      .then((response) => response.json())
      .then((order) => order.id);
  };
  const onApprove = async (data) => {
    const response = await fetch(
      `${process.env.REACT_APP_DEVELOPMENT_URL}/api/capture-paypal-order`,
      {
        method: "POST",
        headers: {
          auth_token: localStorage.getItem("token")
            ? `bearer ${localStorage.getItem("token")}`
            : "",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderID: data.orderID,
          packageID: id,
        }),
      }
    );
    const res_data = await response.json();
    ctx.updateCount(res_data.user.avaliable_counts);

    return data;
  };
  const scroll = () => {

    window.scrollTo({ top: 0, behavior: 'smooth' });

    
  }

  return (
    
      <>
            <a id="topbutton" onClick={scroll}></a>

        <div className=" login">
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
            <img src="wlogo.png" alt="" id="wlogo" style={{marginLeft:'10px'}} />
          </NavLink>
            </div>
            {/* <NavLink to="/Login" className="nav-link"> */}
              <div className="log">
                <a href="/Dashboard" style={{textDecoration:'none'}}>

                <p style={{ color: "white" ,marginRight:'6px' }}>Dashboard</p>
                </a>
              </div>
            {/* </NavLink> */}
          </div>
          <div className="nborder"></div>

          <div className=" logform2 mt-1">
            <div className="formbox2">
              <form className="fform">
                <h3 className="pt-2">Checkout</h3>
                <hr />
                <div className="formbody2">
                  <div className="ftitle">
                    <p className="frs">Username</p>
                    <p className="fls">{ctx.username}</p>
                  </div>
                  <div className="ftitle">
                    <p className="frs">Category</p>
                    <p className="fls">{title}</p>
                  </div>
                  <div className="ftitle">
                    <p className="frs">Total Reports</p>
                    <p className="fls">{report}</p>
                  </div>
                  <div className="ftitle">
                    <p className="frs">Currency</p>
                    <p className="fls">{currency}</p>
                  </div>
                  <hr />
                  <div className="ftitle mt-4">
                    <p className="frs"> Total </p>
                    <p className="fls">{price}</p>
                  </div>
                  <hr />
                </div>

                <div className="lbtn2">
                  <PayPalScriptProvider options={initialOptions}>
                    <PayPalButtons
                      createOrder={(data, actions) =>
                        createOrder(data, actions)
                      }
                      onApprove={(data, actions) => onApprove(data, actions)}
                    />
                  </PayPalScriptProvider>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    
  );
}

export default Paypal;
