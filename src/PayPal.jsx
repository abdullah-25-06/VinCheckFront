import React, { useContext } from "react";
import AuthContext from "./context/auth";
import { useSearchParams } from "react-router-dom";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { NavLink } from "react-router-dom";
function Paypal(props) {
  const ctx = useContext(AuthContext);
  const initialOptions = {
    clientId:
      "AdC9yYyaVxVfUiP_zfUS1pcR0R4nvCHlFoXfy0SyR1Ghh0pLolnXKstmON0Ynqbaea4dFu3yth_K-pSI",
    intent: "capture",
    currency: "USD",
  };
  const [queryParameters] = useSearchParams();
  const id = queryParameters.get("id");
  const currency = queryParameters.get("currency");
  const price = queryParameters.get("price");
  const title = queryParameters.get("title");
  const report = queryParameters.get("report");

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
  return (
    <>
      <>
        <div className=" login">
          <div className="navhead">
            <div className="title">
              <NavLink className="nav-link" to="/">
                <p style={{ color: "white" }}>Vincheck Central</p>
              </NavLink>
            </div>
            <NavLink to="/Login" className="nav-link">
              <div className="log">
                <p style={{ color: "white" }}>Login</p>
              </div>
            </NavLink>
          </div>
          <div className="nborder"></div>

          <div className=" logform2 mt-1">
            <div className="formbox2">
              <form className="fform">
                <h3 className="pt-2">Checkout Form</h3>
                <hr />
                <div className="formbody2">
                  <div className="ftitle">
                    <p className="frs">Username</p>
                    {/* Is m nchy */}
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
    </>
  );
}

export default Paypal;
