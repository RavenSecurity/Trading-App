import './App.css';
import React from "react";

import { Outlet, Link, Navigate } from "react-router-dom";



function App() {
  return (
    <div>
      <>
      <nav>
      <h1><Link to="/home">Home</Link></h1>


      <nav className='Navbar'>
        
      <h1>
      <Link to="/">Home</Link>
      </h1>

      <p>
      <Link to="/pricelist">Price list</Link>
      </p>
      <p>
       <Link to ="/">For developers</Link>
        </p>
    
      <p>
      <Link to ="/">Contact</Link>
        </p>
      
     

      <button className = "Login">
      <Link to="/login">Login</Link>
      </button>

      <button className = "Signup">
      <Link to="/register">SignUp</Link>
      </button>


      </nav>


      <Home/>
      
    

      <Outlet />
      </>
    </div>
  );
}

export default App;
