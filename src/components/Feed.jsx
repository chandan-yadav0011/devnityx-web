import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/contants'
import { useDispatch, useSelector} from 'react-redux'
import { addFeed } from '../utils/slices/feedSlices'
import UserCard from './UserCard'

const Feed = () => {


//  const [feed, setFeed] = useState();
  const dispatch = useDispatch();
  const feed = useSelector((store)=>store.feed);

  const getFeed = async()=>{

    if(feed) return ;

    try{

      const feedData = await axios.get(BASE_URL + "/user/feed", {withCredentials:true});
       console.log(feedData?.data?.data);
      
      // setFeed(feedData?.data?.data);
      dispatch(addFeed(feedData?.data?.data));

    }
    catch(err){
      console.log(err);
    }
    
  }

  useEffect(()=>{
    getFeed();  
  },[]);

  if(!feed) return;


  console.log(feed);
  if(feed.length<=0 ) return <h1 className='flex justify-center m-20'>✔ All caught up</h1>
 
  return feed &&(
    <div className='flex justify-center mt-25'>
      <UserCard showButtons={true} user={feed[0]}/>
    </div>
    
  )
}

export default Feed