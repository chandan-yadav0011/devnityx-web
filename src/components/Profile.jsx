import React from 'react'
import EditProfile from './EditProfile'
import { useSelector } from 'react-redux'
import UserCard from './UserCard'

const Profile = () => {
  const user = useSelector((store)=>store.user);
  return (
    <div className='flex justify-center  my-20'>
       {user&& <EditProfile user= {user}/>}
    </div>
  )
}

export default Profile