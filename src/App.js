import Main from "./Main";
import { Route, Routes } from "react-router-dom";
import Loginform from "./Loginform";
import Dashboard from "./Dashboard";
import Dpage1 from "./Dpage1";
import Profile from "./Profile";
import Paypal from "./PayPal";
import Preview from "./Preview";
// import Signupform from "./Signupform";
import Pricing2 from "./Pricing2";
import Delivery from "./Delivery";
import PP from "./Privacy";
import Terms from "./Terms";
import Newpage from "./Newpage";
// import Modal from "./Modal";
import PrivaateRoutes from './PrivaateRoutes'


function App() {
  return (
    <>
      {/* <Main/> */}

      <Routes>
        <Route element={<PrivaateRoutes />}>
          <Route path="dashboard" element={<Dpage1 />}></Route>
          <Route path="Request" element={<Dashboard />}></Route>
          <Route path="Profile" element={<Profile />}></Route>
          <Route path="Order" element={<Paypal />}></Route>
        </Route>
        <Route path="/" element={<Main />}></Route>
        {/* <Route path="Signupform" element={<Signupform />}></Route> */}
        <Route path="Login" element={<Loginform />}></Route>
        <Route path="Preview" element={<Preview />}></Route>
        <Route path="Pricing" element={<Pricing2 />}></Route>
        <Route path="Delivery" element={<Delivery />}></Route>
        <Route path="Privacy" element={<PP />}></Route>
        <Route path="Terms" element={<Terms />}></Route>
        <Route path="Sample" element={<Newpage />}></Route>
      </Routes>
    </>
  );
}

export default App;
