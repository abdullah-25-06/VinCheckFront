import React, { useContext, useState } from "react";
import AuthContext from "./context/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Preview() {
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);
  const [detail] = useState(ctx ? true : false);
  const [car, setCar] = useState();
  if (localStorage.getItem("car_D") && !car) {
    setCar(JSON.parse(localStorage.getItem("car_D")));
    localStorage.removeItem("car_D");
  } else {
    navigate("/dashboard");
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
      console.log(data.user.avaliable_counts)
      ctx.updateCount(data.user.avaliable_counts);
      navigate("/Dashboard");
      alert(data.msg);
    } catch (error) {
      alert(error.response.data.error);
    }
  };
  return (
    <React.Fragment>
      <div>
        {/* Above data dispaly */}
        <div>{car?.vin}</div>
        <div> {car?.year}</div>
        <div> {car?.madeIn}</div>
        <div> {car?.model}</div>
        <div> {car?.engineCylinder}</div>
        <div> {car?.make}</div>
      </div>
      {detail ? (
        <div>
          <button onClick={btnHandler}>More Detail</button>
          <button>Dashboard</button> {/*navigate*/}
        </div>
      ) : (
        <form action=""></form>
      )}
    </React.Fragment>
  );
}

export default Preview;
