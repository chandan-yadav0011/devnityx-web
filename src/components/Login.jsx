import axios from 'axios';
import React, { useState } from 'react'


const Login = () => {

  const [email,setEmail] = useState("chandan56@gmail.com");
  const [password,setPassword] = useState("chandan$311A");
  const [res, setRes] = useState("");

  const getResponse = async()=>{
      const response = await axios.post("http://localhost:8000/login",{
          email,
          password
      },
    {
      withCredentials:true
    });
      const {data} = response;
      setRes(data);

      // const data = response.json();
      // setRes(data);
  }
 

 


  return (
    <div className='flex justify-center mt-35'>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border " >
        <div className='p-4'>
          <legend className="fieldset-legend flex justify-center text-3xl ">Login</legend>
            <div className= "p-4">
            <label className="label my-2 " >Email</label>
            <input type="email" className="input" placeholder="Email"  value={email} onChange={(e)=>setEmail(e.target.value)} />

            <label className="label my-2 mt-5">Password</label>
            <input type="password" className="input" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>

          <div className='flex justify-center mb-4 '>
          <button className="btn btn-primary my-2 mt-5 text-lg" onClick={getResponse} >Login</button>

          </div>
              <div>
                {res  }
              </div>
         
        </div>
        </fieldset>
</div>
  )
}

export default Login