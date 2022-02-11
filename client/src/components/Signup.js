import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = (props) => {
  const [credential, setcredential] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credential;

    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();

    console.log(json);
    if (json.success) {
      //save the auth token and redirect it
      localStorage.setItem("token", json.authtoken);
      history("/");
      props.showAlert("Account successfully created", "success");
    } else {
      props.showAlert("Invalid details", "danger");
    }
  };

  const onChange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-row md:pt-28 pt-10 mx-auto justify-center ">
      <div className="bg-gray-700 border-3 border-gray-200 rounded-lg px-7 py-7 shadow-md shadow-cyan-500/100 justify-center text-gray-200">
        <div className="flex flex-row justify-center">
          <h1 className="py-2 text-4xl">Sign up </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="py-2 space-x-2 flex flex-row justify-between">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={onChange}
              aria-describedby="emailHelp"
              name="name"
              className="text-black"
            />
          </div>
          <div className="py-2 space-x-2 flex flex-row justify-between">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={onChange}
              aria-describedby="emailHelp"
              className="text-black"
            />
          </div>
          <div className="py-2 space-x-2 flex flex-row justify-between">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="text-black"
              onChange={onChange}
              id="password"
              name="password"
              required
            />
          </div>

          <div className="py-2 space-x-2 flex flex-row justify-between">
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              type="password"
              onChange={onChange}
              id="cpassword"
              name="cpassword"
              className="text-black"
              required
            />
          </div>
          <div className="flex flex-row justify-center pt-8">
            <button
              type="submit"
              className="bg-gray-800 rounded-lg px-2 py-2 shadow-md shadow-cyan-500/100"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
