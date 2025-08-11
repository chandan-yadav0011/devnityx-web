/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/contants';
import { addUser } from '../utils/slices/userSlices';
import UserCard from './UserCard';

const EditProfile = ({user}) => {



  const [firstName,setFirstName] = useState(user?.firstName);
  const [lastName,setLastName] = useState(user?.lastName);
  const [gender,setGender] = useState(user?.gender);
  const [age,setAge] = useState(user?.age);
  const [skills, setSkills] = useState(user?.skills);
  const [photoUrl,setPhotoUrl] = useState(user?.photoUrl);
  const [about,setAbout] = useState(user?.about);
  const [error,setError] = useState("");
  const [showToast,setShowToast] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const getResponse = async()=>{
// eslint-disable-next-line no-unused-vars
    setError("")
    try{
        const response = await axios.patch(BASE_URL+"/profile/edit",
            {
                firstName,
                lastName,   
                photoUrl,
                age,
                gender,
                about
            },
            { withCredentials:true }
        );   

      console.log(response?.data);
      dispatch(addUser(response?.data?.data));

      setShowToast(true);

      setTimeout(()=>{
        setShowToast(false);
      },3000);
      
    }
    catch(err){
      
      console.log(err);
      setError(err.message);

    }
   
  };
  
  return (
    <>
        <div className='mx-10'>
            <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-xs border " >
            <div className='p-4'>
            <legend className="fieldset-legend flex justify-center text-3xl ">Edit Profile</legend>
                <div className= "p-4">
                <label className="label my-2 " >First Name</label>
                <input type="text" className="input" placeholder="First Name"  value={firstName} onChange={(e)=>setFirstName(e.target.value)} />

                <label className="label my-2 mt-5">Last Name</label>
                <input type="text" className="input" placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>

                <label className="label my-2 mt-5">Gender</label>
                <input type="text" className="input" placeholder="Gender" value={gender} onChange={(e)=>setGender(e.target.value)}/>

                <label className="label my-2 mt-5">Age</label>
                <input type="text" className="input" placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)}/>

                <label className="label my-2 mt-5">Skills</label>
                <input type="text" className="input" placeholder="Skills" value={skills} onChange={(e)=>setSkills(e.target.value)}/>

                <label className="label my-2 mt-5">About</label>
                <input type="text" className="input" placeholder="About" value={about} onChange={(e)=>setAbout(e.target.value)}/>

                <label className="label my-2 mt-5">Photo Url</label>
                <input type="text" className="input" placeholder="Photo Url" value={photoUrl} onChange={(e)=>setPhotoUrl(e.target.value)}/>

                </div>

                <p className='text-red-500 p-2 mx-3'>{error}</p>
            <div className='flex justify-center mb-4 '>
            <button className="btn btn-primary my-2 mt-5 text-lg" onClick={getResponse} >Save Profile</button>

            </div>
            
            </div>
            </fieldset>
        </div>
        <UserCard showButtons ={showButtons} user={{firstName,lastName,gender,age,skills,photoUrl,about}}/>
       {showToast && <div className="toast toast-top toast-center">
            <div className="alert alert-success">
                <span className='font-bold'>Profile saved successfully.</span>
            </div>
        </div>}
    </>
  )
}

export default EditProfile