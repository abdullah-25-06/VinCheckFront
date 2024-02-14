import React, { useContext } from "react";
import AuthContext from "./context/auth";
import { useSearchParams } from "react-router-dom";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
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

  const createOrder = (data) => {
    return fetch("http://localhost:8000/api/orders", {
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
      "http://localhost:8000/api/capture-paypal-order",
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
      {currency}
      {price}
      {title}
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        />
      </PayPalScriptProvider>
    </>
  );
}

export default Paypal;
