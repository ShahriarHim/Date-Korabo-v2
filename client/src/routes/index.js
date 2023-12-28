import { BrowserRouter, Routes, Route } from "react-router-dom";

import Bot from "../pages/Additional/bot";
import Login from "../pages/User/login";
import Signup from "../pages/User/signup";
import Dashboard from "../pages/components/dashboard";
import RestaurantList from "../pages/Restaurant/restaurantList";
import Package from "../pages/User/package";
import PkgDetails from "../pages/User/pkg_details";
import Payment from "../pages/Payment/payment";
import AboutMe from "../pages/components/aboutMe";
import RestaurantShow from "../pages/Restaurant/restaurantShow";
import RestaurantReg from "../pages/Restaurant/restaurantReg";
import AdminProfile from "../pages/admin/adminProfile"
import UserList from "../pages/admin/userList";
import ResList from "../pages/admin/resList";
import ALogin from "../pages/admin/adminLogin";
import MenuCreate from "../pages/admin/menuCreate";
import CustomPack from "../pages/User/customPack";
import AdminSignup from "../pages/admin/adminSignup";
import BKash from "../pages/Payment/bkash";
import Rocket from "../pages/Payment/rocket";
import ResCreate from "../pages/admin/resCreate";
import Events from "../pages/components/events";

const Index = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Admin Routes */}
          <Route path="/aSignup" element={<AdminSignup/>}></Route>
          <Route path="/aLogin" element={<ALogin />}></Route>
          <Route path="/admin-Dashboard" element={<AdminProfile />}></Route>



          {/* User Routes */}
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/about-me" element={<AboutMe />}></Route>
          <Route path= "/package" element={<Package/>}> </Route>
          <Route path= "/pkg_details" element={<PkgDetails/>}> </Route>
          <Route path="/customPack" element={<CustomPack/>}></Route>
          <Route path="/list" element={<RestaurantList />}></Route>
          <Route path="/events" element={<Events/>}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/bkash" element={<BKash/>}></Route>
          <Route path="/rocket" element={<Rocket/>}></Route>




          {/* Restaurant Routes */}
          <Route path="/res-reg" element={<RestaurantReg/>}></Route>
          <Route path="/res-show" element={<RestaurantShow />}></Route>
          <Route path="/user-list" element={<UserList />}></Route>
          <Route path="/res-list" element={<ResList />}></Route>
          <Route path="/menu-create" element={<MenuCreate/>}></Route>
          <Route path="/res-create" element={<ResCreate/>}></Route>

          {/* Additional Routes */}
          <Route path="/bot" element={<Bot />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Index;
