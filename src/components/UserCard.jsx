/* eslint-disable no-unused-vars */
import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../utils/contants';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/slices/userSlices';
import { removeFeed } from '../utils/slices/feedSlices';

const UserCard = ({showButtons,user}) => {
  const {firstName,lastName,gender, skills, age, photoUrl,about}= user;
  
  
  const dispatch = useDispatch();

  const handleStatus = async(status,toUserId)=>{
    const res = await axios.post(BASE_URL+"/request/send/"+status+"/"+toUserId,{},{withCredentials:true});
    console.log(res.data);
    dispatch(removeFeed(toUserId));
  
    
  }
  return (
    <div className="card bg-base-300 w-96 shadow-sm ">
        <figure>
            <img
            src={user?.photoUrl}
            alt="photo" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{firstName + " " + lastName}</h2>
             {gender && age &&<p>{gender+ " "+ age}</p>}
             <p>Skills : {skills}</p>
            <p>{about}</p>
            
           {showButtons&& <div className="card-actions justify-center p-4 m-2">
              <button className="btn btn-primary" onClick={()=>handleStatus("ignored", user._id)}>Ignore</button>
              <button className="btn btn-secondary" onClick={()=>handleStatus("interested",user._id)}>Interested</button>
            </div>}
        </div>
    </div>
  )
}

export default UserCard