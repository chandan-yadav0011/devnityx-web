/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState } from 'react'
import { BASE_URL } from '../utils/contants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/slices/userSlices';
import { Link, useNavigate } from 'react-router-dom';


const Signup = () => {

  const [firstName,setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelSignup = async()=>{
      try{
        const response = await axios.post(BASE_URL+"/signup",{
            firstName,
            lastName,
            email,
            password,
      },{withCredentials:true});

      console.log(response.data.data);

        dispatch(addUser(response.data.data));
        navigate("/profile");
 
      }
      catch(err){
      
        setError(err.message)
  
      //
     
      }
      
    
  }

  return (
    <div className='flex justify-center mt-20'>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border " >
            <div className='p-4'>
            <legend className="fieldset-legend flex justify-center text-3xl ">Sign up</legend>
                <div className= "p-4">

                
                <label className="label my-2 mt-4">First Name</label>
                <input type="text" className="input" placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>

                <label className="label my-2 mt-4" >Last Name</label>
                <input type="text" className="input" placeholder="Last Name"  value={lastName} onChange={(e)=>setLastName(e.target.value)} />

                <label className="label my-2 mt-4">Email</label>
                <input type="email" className="input" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                <label className="label my-2 mt-4">Password</label>
                <input type="password" className="input" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

               
                </div>

               
                  <p className='text-red-500'>{error}</p>
             

            <div className='flex justify-center mb-4 '>
            <button className="btn btn-primary my-2 mt-5 text-lg" onClick={handelSignup} >Sign up</button>

            </div>
              <div className='flex justify-center mb-5'>
              <p>Already have account? <Link to ="/login" className='underline hover:opacity-50'>Login</Link> here </p>
               </div>
            
            </div>
        </fieldset>
    </div>
  )
}

export default Signup