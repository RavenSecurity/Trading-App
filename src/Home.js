import React from 'react'
import { Outlet, Link, Navigate } from "react-router-dom";

export default function Home() {
  return (
    <div className="Para">
    
      <p className="text-white text-sm">At eu, fringilla quis at ornare. Nec sagittis, in cras non mi.</p>
      <h2 className="text-white text-xl">Hello World. Welcome to this project. Brief intro.</h2>
      <p className="text-white text-sm">Neque habitant tellus ut sed arcu dignissim suscipit mauris. 
      Tortor, nibh pulvinar urna sed ac. Non eu sed ullamcorper rutrum et ultrices pulvinar ullamcorper aliquam. 
      Odio duis condimentum tincidunt integer massa, gravida risus. Est montes, pharetra faucibus a, varius.</p>
    
    </div>
  )
}