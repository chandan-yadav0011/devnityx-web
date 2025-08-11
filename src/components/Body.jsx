import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { BASE_URL } from '../utils/contants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/slices/userSlices'
import axios from 'axios'

const Body = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store)=>store.user);

  const fetchUser = async ()=>{
    if(userData) return ;
      try{
        const res = await axios.get(BASE_URL + "/profile/view",{
          withCredentials:true
        });

        dispatch(addUser(res.data));
      }
      catch(err){
        if(err.status===401){
          navigate("/login");
        } 
        else if(err.status===400) //here for user not found but still we try to access the feed of that user is not possible first it needs to create account
        {
          navigate("/signup")
        }
        console.log(err);
      }
  } 

  useEffect(()=>{
    if(!userData)
    {
        fetchUser();
    }
  },[]);

  return (
    <div>
        <Navbar/>
        <Outlet/>
        
    </div>
  )
}

export default Body