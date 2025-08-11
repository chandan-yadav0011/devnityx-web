/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/contants'
import { useDispatch, useSelector } from 'react-redux';
import { addRequest, removeRequest } from '../utils/slices/requestSlice';

const Requests = () => {
  
  
  const [toastData, setToastData] = useState(false);
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();

  const user = useSelector((store)=>store.user);
  const reqData = useSelector((store)=>store.request);
  const fetchRequests = async()=>{
    const requests = await axios.get(BASE_URL + "/user/requests/received",{withCredentials:true});
    console.log(requests.data);
    
    dispatch(addRequest(requests?.data?.data));
  };

  const handleAccept =async(req_id)=>{
    const res = await axios.post(BASE_URL+"/request/review/accepted/"+ req_id,{},{withCredentials:true});
    console.log(res?.data?.data);
    setStatus(res?.data?.data?.status);
    console.log(status)
    setToastData(true);
    setTimeout(()=>{
        setToastData(false)
    },3000);

    dispatch(removeRequest(req_id));
  
  
  }

  const handleReject =async(req_id)=>{
    const res = await axios.post(BASE_URL+"/request/review/rejected/"+ req_id,{},{withCredentials:true});
    console.log(res?.data?.data);
    setStatus(res?.data?.data?.status);

    setToastData(true);
    console.log(status)
    console.log(toastData);
    setTimeout(()=>{
        setToastData(false)
    },3000);
    dispatch(removeRequest(req_id));


  }


  useEffect(()=>{
    fetchRequests();
  },[]);


  if(!reqData) return ;

  if(reqData.length===0) return ( 
    <>
      {toastData&& <div className="toast toast-top toast-center">
                              <div className="alert alert-success">
                                  <span>{status}</span>
                              </div>
                          </div>}
      <h1 className="p-4 pb-2 text-xl tracking-wide mt-5 my-2 flex justify-center">No connections request found</h1>
    </>   
    );

  return (
    <>
    <div className='mt-12'>
    <h1 className="p-4 pb-2 text-4xl tracking-wide mt-5 my-2 flex justify-center">Connections Requests of {user?.firstName}</h1>
    <div className='flex justify-center'>
        <ul className="list bg-base-300 rounded-box shadow-md w-1/2  m-5">
            {
                reqData.map((element)=>{
                    return (
                                <li key={element._id} className="list-row ">
                                <div><img className="size-10 rounded-box" src={element?.fromUserId?.photoUrl}/></div>
                                <div className='flex '>
                                  <div>
                                    <div className='font-bold'>{element?.fromUserId?.firstName+" "+ element?.fromUserId?.lastName}</div>
                                    <div className="text-xs uppercase font-semibold opacity-60">{element?.fromUserId?.skills}</div>
                                    
                                  </div>
                                  <div className="card-actions ml-120 ">
                                      <button className="btn btn-primary " onClick={()=>handleReject(element._id)}>Reject</button>
                                      <button className="btn btn-secondary" onClick={()=>handleAccept(element?._id)}>Accept</button>
                                  </div>
                                </div>
                                
                            </li>
                    );  
                })
            }
    
        </ul>
    </div>
    </div>

    {toastData &&<div className="toast toast-top toast-center">
        <div className="alert alert-success">
            <span>{status}</span>
        </div>
    </div>}
    </>

  )
}

export default Requests 