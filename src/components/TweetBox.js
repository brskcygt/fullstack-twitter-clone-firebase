import React, { useState } from 'react'
import { AddEmojiIcon, AddGifIcon, AddMediaIcon, AddSurveyIcon, LocationIcon, PlanIcon } from '../icons/Icon'
import { useDispatch } from 'react-redux';
import { sendTweetAction } from '../redux/actions/posts';

export const TweetBox = () => {
    const dispatch = useDispatch();
    const [content, setContent] = useState("");

    const sendTweet = async () => {
        dispatch(sendTweetAction(content));
        setContent("");
    } 

    return (
        <div className='flex-1 flex flex-col mt-2 px-2'>
            <textarea 
            onChange={e=>setContent(e.target.value)}
            value={content}
            className='w-full focus-within:outline-none text-xl placeholder-gray-dark overflow-hidden resize-none bg-transparent' placeholder='Neler oluyor ?' />
            <div className='flex items-center justify-between'>
                <div className='flex -ml-3'>
                    <div className='flex items-center justify-center w-11 h-11 hover:bg-primary-light transform transition-colors duration-200 rounded-full cursor-pointer'>
                        <AddMediaIcon className='w-6 h-6 text-primary-base' />
                    </div>
                    <div className='flex items-center justify-center w-11 h-11 hover:bg-primary-light transform transition-colors duration-200 rounded-full cursor-pointer'>
                        <AddGifIcon className='w-6 h-6 text-primary-base' />
                    </div>
                    <div className='flex items-center justify-center w-11 h-11 hover:bg-primary-light transform transition-colors duration-200 rounded-full cursor-pointer'>
                        <AddSurveyIcon className='w-6 h-6 text-primary-base' />
                    </div>
                    <div className='flex items-center justify-center w-11 h-11 hover:bg-primary-light transform transition-colors duration-200 rounded-full cursor-pointer'>
                        <AddEmojiIcon className='w-6 h-6 text-primary-base' />
                    </div>
                    <div className='flex items-center justify-center w-11 h-11 hover:bg-primary-light transform transition-colors duration-200 rounded-full cursor-pointer'>
                        <PlanIcon className='w-6 h-6 text-primary-base' />
                    </div>
                    <div className='flex items-center justify-center w-11 h-11 hover:bg-primary-light transform transition-colors duration-200 rounded-full cursor-pointer'>
                        <LocationIcon className='w-6 h-6 text-primary-base' />
                    </div>
                </div>
                <button
                onClick={()=>sendTweet()}
                className='bg-primary-base text-white rounded-full px-8 py-2 font-semibold text-xl'>Tweet</button>
            </div>
        </div>
    )
}
