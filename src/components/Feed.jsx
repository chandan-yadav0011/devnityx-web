import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/contants'
import { useDispatch, useSelector } from 'react-redux'
import FeedCard from './FeedCard'
import { addFeed } from '../utils/slices/feedSlices'

const Feed = () => {

  const feed = useSelector((store)=>store.feed);
  const dispatch = useDispatch();

  const getFeed = async()=>{

    if(feed) return ;
    try{
      const feedData = await axios.get(BASE_URL + "/feed", {withCredentials:true});
      console.log(feedData.data);
      dispatch(addFeed(feedData.data));

    }
    catch(err){
      console.log(err);
    }
    
  }

  useEffect(()=>{
    getFeed();
  },[]);


  return feed &&(
    <div className='flex justify-center mt-25'>
      <FeedCard user={feed[1]}/>
    </div>
    
  )
}

export default Feed