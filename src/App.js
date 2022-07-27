import './App.css';
import React from "react";

import { Outlet, Link, Navigate } from "react-router-dom";



function App() {
  return (
    <div>
       <h1 className="text-3xl font-bold underline bg-red-600">
      Hello world!
      test
    </h1>
      <>
      <nav>
      <h1><Link to="/home">Home</Link></h1>

      <a><Link to="/pricelist">Price list</Link></a>
      <a>For developers</a>
      <a>Contact</a>
      
      <button><Link to="/login">Login</Link></button>
      <button><Link to="/register">SignUp</Link></button>
      </nav>

      <Outlet />
      </>
    </div>
  );
}

export default App;
