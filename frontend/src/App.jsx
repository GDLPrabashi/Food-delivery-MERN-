import React, { useState } from 'react'
import NavBar from './components/Navbar/NavBar';
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import {Route,Routes} from "react-router-dom";
import Footer from './components/Footer/Foodter';
import LoginPopup from './components/LoginPopup/LoginPopup';
import MyOrder from './pages/MyOrder/MyOrder';

const App = () => {

  const[showLogin,setShowLogin] =useState(false);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
    <div className="app">
      <NavBar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/placeorder" element={<PlaceOrder/>} />
        <Route path="/myorders" element={<MyOrder/>}/>
      </Routes>
      
    </div>
    <Footer/>
    </>
  )
}

export default App
