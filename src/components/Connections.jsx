/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { BASE_URL } from '../utils/contants';

const Connections = () => {

  const [connectionsData, setConnectionsData] = useState([]);
  const user = useSelector((store)=>store.user);

  const getConnections = async()=>{
    const connectionsResponse = await axios.get(BASE_URL+"/user/connections",{withCredentials:true});
    console.log(connectionsResponse?.data?.data);
    setConnectionsData(connectionsResponse?.data?.data);
  }

  useEffect(()=>{
    getConnections();
  },[]);

  if(!connectionsData) return ;

  if(connectionsData.length===0) return <h1 className='text-xl'>No Connections found</h1>

  return (
    <div className='mt-12'>
    <h1 className="p-4 pb-2 text-4xl tracking-wide mt-5 my-2 flex justify-center">Connections of {user?.firstName}</h1>
    <div className='flex justify-center'>
        <ul className="list bg-base-300 rounded-box shadow-md m-5 w-1/2 ">
    
         
            {
                connectionsData.map((element)=>{

                    return (<li key={element._id} className="list-row ">
                        <div><img className="size-10 rounded-box" src={element?.photoUrl}/></div>
                        <div>
                        <div className='font-bold'>{element.firstName+" "+ element.lastName}</div>
                        <div className="text-xs uppercase font-semibold opacity-60">{element?.skills}</div>
                        <div>{element.about}</div>
                        </div>
                        
                    </li>);  
                })
            }
    
        </ul>
    </div>
    </div>
  )
}

export default Connections