import Main from "./Main";
import { Route, Routes } from "react-router-dom";
import Loginform from "./Loginform";
import Dashboard from "./Dashboard";
import Dpage1 from "./Dpage1";
import Profile from "./Profile";
import Paypal from "./PayPal";
import Preview from "./Preview";
import Signupform from "./Signupform";
function App() {
  return (
    <>
      {/* <Main/> */}
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="Signupform" element={<Signupform />}></Route>
        <Route path="Login" element={<Loginform />}></Route>
        <Route path="dashboard" element={<Dpage1 />}></Route>
        <Route path="Request" element={<Dashboard />}></Route>
        <Route path="Profile" element={<Profile />}></Route>
        <Route path="Order" element={<Paypal />}></Route>
        <Route path="Preview" element={<Preview />}></Route>
      </Routes>
    </>
  );
}

export default App;
