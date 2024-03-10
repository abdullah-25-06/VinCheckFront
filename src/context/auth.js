import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = React.createContext({
  isLoggedIn: false,
  username: null,
  count: 0,
});

export const AuthContextProvider = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [Mcount, setCount] = useState(0);

  const updateCount = (count) => {
    setCount(count);
    localStorage.setItem("count", count);
  };
  const SignUpHandler = async (email, password, phoneno, username,vin) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_DEVELOPMENT_URL}/register/`,
        {
          email,
          password,
          phoneno,
          username,
          vin
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.isAdmin) localStorage.setItem("admin", data.isAdmin);
      setIsLoggedIn(true);
      setUsername(data.username);
      setCount(data.count);

      localStorage.setItem("token", data.access_token);
      localStorage.setItem("IsloggedIn", "1");
      localStorage.setItem("username", data.username);
      localStorage.setItem("count", data.count);

      return {
        status: 200,
        msg: "Successfully signed up",
      };
    } catch (err) {
      if (err.response.status === 401) {
        localStorage.removeItem("IsloggedIn");
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("count");
        localStorage.removeItem("admin");

        setUsername(null);
        setCount(0);
        setIsLoggedIn(false);
        navigate("/");
      }
      return {
        status: 404,
        msg: err.response.data.msg,
      };
    }
  };
  const loginHandler = async (email, password) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_DEVELOPMENT_URL}/login`,
        // "http://localhost:8000/login/",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      if (data.isAdmin) localStorage.setItem("admin", data.isAdmin);
      setIsLoggedIn(true);
      setUsername(data.username);
      setCount(data.count);
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("IsloggedIn", "1");
      localStorage.setItem("username", data.username);
      localStorage.setItem("count", data.count);

      return {
        status: 200,
        msg: "Successfully logged in",
      };
    } catch (err) {
      if (err.response?.status === 401) {
        localStorage.removeItem("IsloggedIn");
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("count");
        localStorage.removeItem("admin");
        setUsername(null);
        setCount(0);
        setIsLoggedIn(false);
        navigate("/");
      }
      return {
        status: 404,
        msg: err.response?.data.error,
      };
    }
  };

  useEffect(() => {
    const isUser = localStorage.getItem("IsloggedIn");
    const username = localStorage.getItem("username");
    const count = localStorage.getItem("count");
    // const transactions = localStorage.getItem("tData");

    if (isUser === "1" && username) {
      setIsLoggedIn(true);
      setUsername(username);
      setCount(count);
    }
  }, [isLoggedIn, username, Mcount]);
  
  const logoutHandler = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_DEVELOPMENT_URL}/logout/`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            auth_token: isLoggedIn
              ? `bearer ${localStorage.getItem("token")}`
              : "",
          },
        }
      );
      localStorage.removeItem("IsloggedIn");
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("count");
      localStorage.removeItem("admin");
      setIsLoggedIn(false);
      setUsername("");
      return { msg: data.msg, status: data.status };
    } catch (err) {
      if (err.response?.status === 401) {
        localStorage.removeItem("IsloggedIn");
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("count");
        localStorage.removeItem("admin");
        setUsername(null);
        setCount(0);
        setIsLoggedIn(false);
        navigate("/");
      }
      return { msg: err.msg, status: err.status };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        username: username,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        onSignUp: SignUpHandler,
        count: Mcount,
        updateCount: updateCount,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
