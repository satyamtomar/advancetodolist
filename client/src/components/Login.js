import React from 'react';

const Login = () => {
  return <>

<div className="flex flex-row md:pt-28 pt-10 mx-auto justify-center  ">
    <div className="border-2 border-gray-500 rounded-lg px-7 py-7 shadow-lg shadow-cyan-500/100 text-gray-200 bg-gray-500">
     <div className="space-x-2 flex flex-row justify-center">
    <h1 className="text-2xl pb-10">Login </h1>
    </div>
      <form >
        <div className="mb-3 space-x-2 flex flex-row justify-between">
          <label htmlFor="email " >
            Email address
          </label>
          <input
            type="email"
            className="bg-gray-100 text-black"
            id="email"
            name="email"
            aria-describedby="emailHelp"
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
