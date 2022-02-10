import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [credential, setcredential] = useState({ email: "", password: "" });
  let history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        email: credential.email,
        password: credential.password,
      }),
    });
    const json = await response.json();

    console.log(json);
    if (json.success) {
      //save the auth token and redirect it
      localStorage.setItem('token', json.authtoken);
      props.showAlert("Loggedin successfully", "success");
      history('/');
     
      
    }
     else {
      props.showAlert("Invalid credentials", "danger");
    }
  };

  const onChange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value });
  };
  return <>


<div className="flex flex-row md:pt-28 pt-10 mx-auto justify-center  ">
    <div className="border-2 border-gray-500 rounded-lg px-7 py-7 shadow-lg shadow-cyan-500/100 text-gray-200 bg-gray-500">
     <div className="space-x-2 flex flex-row justify-center">
    <h1 className="text-2xl pb-10">Login </h1>
    </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 space-x-2 flex flex-row justify-between">
          <label htmlFor="email " >
            Email address
          </label>
          <input
            type="email"
            className="bg-gray-100 text-black"
            id="email"
            name="email"
            aria-describedby="emailHelp" onChange={onChange}
            value={credential.email}
          />
          
        </div>
        <div className="mb-3 space-x-2 flex flex-row justify-between">
          <label htmlFor="password" >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            
            
            className="bg-gray-100 text-black"
            onChange={onChange}
            value={credential.password}
          />
        </div>
        <div className="flex flex-row justify-center pt-8">
        <button type="submit" className="bg-gray-800 rounded-lg px-2 py-2 shadow-md shadow-cyan-500/100">
          Submit
        </button>
        </div>
      </form>
      </div>
    </div>
  </>;
};

export default Login;
