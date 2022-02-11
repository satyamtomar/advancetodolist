import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Userinfo = () => {
    const history=useNavigate();
    const host="http://localhost:5000";
   const [cred,getcred]=useState({
       name:"",
       email:"",
   });
    useEffect(() => {
        if(!localStorage.getItem('token'))
        { 
            history("/");
        }
        const getinfo=async()=>{
            const response = await fetch(`${host}/api/auth/getuser`, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "auth-token": localStorage.getItem('token'),
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
              });
              const jsonnn = await response.json();
              //  console.log(jsonnn)
              getcred(jsonnn);
        }      
      getinfo();
    }, [])
    

  return (
    <div className="flex flex-row justify-center  mt-8">
   <div className="flex flex-col justify-center border-2 border-gray-100 items-center bg-gray-700 my-8 py-8 px-8 rounded-lg shadow-md shadow-blue-500/100 ">
   <div className="flex flex-row px-6 py-6 items-end justify-between space-x-8"><div> <h1 className="text-3xl text-gray-100">User Name:</h1>
   </div><div>
   <h1 className="text-3xl text-gray-100"> {cred.name}</h1></div></div>
   <div className="flex flex-row px-6 py-6 space-x-8 items-end justify-between  ">
   <div> <h1 className="text-3xl text-gray-100 ">User Email:</h1> </div>   
<div><h1 className="text-3xl text-gray-100 "> {cred.email}</h1></div>
   </div>
    </div>
    </div>
  )
}

export default Userinfo