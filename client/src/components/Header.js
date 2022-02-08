import React from 'react';
import "./nav.css";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";


const Header = () => {
    let history=useNavigate();
    const logoutfun = ()=>{
      localStorage.clear()
      console.log(localStorage.getItem('token'));
    setTimeout(() => {
      history.push('/login')
    },1000)  
      
    }
    return (
      
            <div>
        <nav className="bg-gray-800 text-gray-200">
          <div className="md:px-16 px-2 py-2 max-w-full mx-auto flex justify-between  md:text-xl md:text-lg items-center space-x-2">
            <div className="md:space-x-12 space-x-2 flex justify-between items-center ">
              <div className="items-center ">
                <svg viewBox="0 0 960 200" className="h-full w-full items-center">
                  <symbol id="s-text">
                    <text text-anchor="middle" x="30%" y="60%" className="text-8xl">
                    <Link className="hover:text-gray-600 " to="/">todolist</Link>
                    
                    </text>
                  </symbol>
                  <g className = "g-ants">
          <use href="#s-text" class="text-copy"></use>
          <use href="#s-text" class="text-copy"></use>
          <use href="#s-text" class="text-copy"></use>
          <use href="#s-text" class="text-copy"></use>
          <use href="#s-text" class="text-copy"></use>
      </g>
                </svg>
                
              </div>
              
            </div>
            <div>
            <div className="space-x-3 items-center flex flex-row ">
              
                <Link className="hover:text-gray-600 font-bold" to="/">Home</Link>
                <Link className="hover:text-gray-600 font-bold" to="/about">About</Link>
                
                {localStorage.getItem('token')===null  ? 
                <div className="flex flex-row space-x-3">
                <Link className="hover:text-gray-600 font-bold" to="/login" role="button">Login</Link>
                <Link className="hover:text-gray-600 font-bold" to="/signup" role="button">Signup</Link>
                </div>
                :
                <button onClick={logoutfun}  className="hover:text-gray-600 font-bold">Logout</button>
                
                }
                </div>
              
              
            </div>
          </div>
        </nav>
      </div>
      
    );
};

export default Header;
