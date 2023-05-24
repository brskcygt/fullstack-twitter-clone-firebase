import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { logoutAction } from '../redux/actions/auth'

export const UserBox = () => {
    const dispatch = useDispatch();
    const logOutFunc = () => {
      dispatch(logoutAction());
    }
    // const {photoURL} = useSelector(state=>state.auth.auth);
    
    return (
        <div className='flex justify-between items-center mb-6'>
            <div className='flex justify-between items-center hover:bg-primary-light py-2 px-6 transform transition-colors duration-200 rounded-full cursor-pointer '>
                <img
                    className='w-11 h-11 rounded-full'
                    src='https://pbs.twimg.com/profile_images/1559644611047464961/r6inVDH0_400x400.jpg' alt='Profile' />
                <div className='flex flex-col ml-4'>
                    <span className='font-bold text-md text-black'>Barış Koçyiğit</span>
                    <span className='text-sm text-gray-dark'>@brs_kocyigit</span>
                </div>
            </div>
            <div className='flex items-center justify-center w-12 h-12 p-3 hover:bg-primary-light transform transition-colors duration-200 rounded-full cursor-pointer '>
                <div className=''>
                    <BiLogOut onClick={logOutFunc} size={25} className="text-black cursor-pointer " />
                </div>
            </div>


        </div>
    )
}
