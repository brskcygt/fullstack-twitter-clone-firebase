import React from 'react'
import { LikeIcon, ReplyIcon, RetweetIcon } from '../icons/Icon'

export const FeedItem = ({ avatar, content, displayName, image, timestamp, username }) => {
    return (
        <article className='flex space-x-3 border-b border-gray-extraLight px-4 py-3 cursor-pointer hover:bg-gray-50'>
            <img src={avatar} alt="Profile" className='w-11 h-11 rounded-full' />
            <div className='flex-1'>
                <div className='flex items-center text-sm'>
                    <h4 className='font-bold'>{displayName}</h4>
                    <span className='ml-2 text-gray-dark'>@{username}</span>
                    <div className='mx-2 bg-gray-dark h-1 w-1 border rounded-full' />
                    <span className='text-gray-dark'>{timestamp?.toDate().toLocaleTimeString("tr-TR")}</span>
                </div>
                <p className='mt-2 text-gray-900 text-sm'>{content}</p>
                {image && (
                    <img src={image} alt="Profile" className="my-2 rounded-xl max-h-96" />
                )}
                <ul className='flex justify-between max-w-md -ml-3 mt-3'>
                    <li className='group flex items-center justify-between'>
                        <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light '>
                            <ReplyIcon className="w-5 h-5 group-hover:text-primary-base transform transition-colors duration-200"/>
                        </div>
                        <span className='group-hover:text-primary-base text-xs ml-1'>5</span>
                    </li>

                    <li className='group flex items-center justify-between'>
                        <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-200'>
                            <RetweetIcon className="w-5 h-5 group-hover:text-green-600 transform transition-colors duration-200"/>
                        </div>
                        <span className='group-hover:text-green-600 text-xs ml-1'>1</span>
                    </li>

                    <li className='group flex items-center justify-between'>
                        <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-red-200'>
                            <LikeIcon className="w-5 h-5 group-hover:text-red-600 transform transition-colors duration-200"/>
                        </div>
                        <span className='group-hover:text-red-600 text-xs ml-1'>250</span>
                    </li>
                </ul>
            </div>

        </article>
    )
}
