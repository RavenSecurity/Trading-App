import './App.css';
import React from "react";

import { Outlet, Link } from "react-router-dom";


import Home from "./Home";


function App() {
  return (
    <div>
      <>
      <nav>
      <h1><Link to="/">Home</Link></h1>

      <a><Link to="/pricelist">Price list</Link></a>
      <a>For developers</a>
      <a>Contact</a>
      
      <button><Link to="/login">Login</Link></button>
      <button><Link to="/register">SignUp</Link></button>
      </nav>

      <Home/>


      <Outlet />
      </>
    </div>
  );
}

export default App;
