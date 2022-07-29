import React from 'react'

export default function Login() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-white">Login</h1>
      <form className="text-center ">
        <label className="texte-white ">
          <p className="text-white">Username:</p>
          <input className="" type="text" uname="uname" />
        </label>
        <label className="">
        <p className="text-white">Password:</p>
          <input type="text" password="password" />
        </label>
      </form>
    </div>
  )
  }