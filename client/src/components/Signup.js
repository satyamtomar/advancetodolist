import React from 'react';

const Signup = () => {
  return <div>

<div className="flex flex-row md:pt-28 pt-10 mx-auto justify-center ">
    <div className="border-2 border-gray-500 rounded-lg px-7 py-7 shadow-lg shadow-cyan-500/100 justify-center text-gray-200 bg-gray-500">
     <div className="flex flex-row justify-center">
    <h1 className="py-2 text-4xl">Sign up </h1>
    </div>
      <form >
        <div className="py-2 space-x-2 flex flex-row justify-between">
          <label htmlFor="name" >
            Name
          </label>
          <input
            type="text"
            className="text-black"
            id="name"
            aria-describedby="emailHelp"
            name="name"
          />
        </div>
        <div className="py-2 space-x-2 flex flex-row justify-between">
          <label htmlFor="email" >
            Email address
          </label>
          <input
            type="email"
            className="text-black"
            name="email"
            id="email"
            aria-describedby="emailHelp"
          />
          
        </div>
        <div className="py-2 space-x-2 flex flex-row justify-between">
          <label htmlFor="password" >
            Password
          </label>
          <input
            type="password"
            className="text-black"
            
            id="password"
            name="password"
            minLength={1}
            required
          />
        </div>

        <div className="py-2 space-x-2 flex flex-row justify-between">
          <label htmlFor="cpassword" >
            Confirm Password
          </label>
          <input
            type="password"
            className="text-black"
            id="cpassword"
            name="cpassword"
            minLength={1}
            required
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
  </div>;
};

export default Signup;
