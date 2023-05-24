import React, { useEffect, useState } from 'react'
import { Divider } from '../components/Divider'
import { TweetBox } from '../components/TweetBox'

import {db} from '../firebase.js';
import { collection,onSnapshot, orderBy, query } from "firebase/firestore";
import { FeedList } from '../components/FeedList';

export const Content = () => {

  const [tweets,setTweets] = useState([]);

  const getTweets = async () => {
    const q = query(collection(db,"feed"),orderBy("timestamp","desc"));
    onSnapshot(q,(snapshot)=>{
      setTweets(snapshot.docs.map((doc)=>doc.data()));
    });
  }

  useEffect(() => {
    getTweets();
  }, []);
  
  return (
    <main className="flex-1 border-l border-r flex flex-col border-gray-extraLight">
      <header className='sticky top-0 z-10 flex p-4 border-b border-gray-extraLight bg-white'>
        <span className='font-bold text-xl text-gray-900'>Home</span>
      </header>
      <div className='flex px-4 py-3 space-x-4'>
        <img
          className='w-11 h-11 rounded-full'
          src='https://pbs.twimg.com/profile_images/1559644611047464961/r6inVDH0_400x400.jpg' alt='Profile' />
        <TweetBox />
      </div>
      <Divider />
      <FeedList tweets={tweets}/>
    </main>
  )
}
