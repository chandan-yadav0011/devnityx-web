import React from 'react'
import UserCard from './UserCard'
import { useSelector } from 'react-redux'

const GetUser = () => {
  const user = useSelector((store)=>store.user);
  
  return user&&(
    <div>
       <UserCard user= {user}/>
    </div>
  )
}

export default GetUser