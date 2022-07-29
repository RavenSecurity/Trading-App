import './App.css';
import React from "react";

import { Outlet, Link, Navigate } from "react-router-dom";



function App() {
  return (
    <div>
      <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-zinc-500 mb-3">
      <h1 className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"><Link to="/home">Home</Link></h1>

      <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"><Link to="/pricelist">Price list</Link></a>
      <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo">For developers</a>
      <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href='Contact'>Contact</a>
      
      <button className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 uppercase text-white rounded-3xl bg-orange-300 w-28 ml-96"
              href="#pablo"><Link to="/login">Login</Link></button>
      <button className="text-sm font-bold leading-relaxed inline-block mr-4 py-2  uppercase text-white rounded-3xl bg-orange-300 w-28  ;
margin-right: 14rem; "
              href="#pablo"><Link to="/register">SignUp</Link></button>
      </nav>
       
      <Outlet />
      </>
    </div>
  );
}

export default App;
