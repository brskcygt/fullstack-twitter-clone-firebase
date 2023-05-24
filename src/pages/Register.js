import React from 'react';
import { useState } from "react";
import { useDispatch} from 'react-redux';
import { loginAction, registerAction } from '../redux/actions/auth';
import { BsTwitter } from 'react-icons/bs';


export const Register = () => {
    const dispatch = useDispatch();
    const [signUp, setSignUp] = useState(true);
    const [authData, setAuthData] = useState({
        username: "",
        email: "",
        password: "",
        photoURL : "https://pbs.twimg.com/profile_images/1559644611047464961/r6inVDH0_400x400.jpg"
    });

    const authFunc = () => {
        if (signUp) {
            dispatch(registerAction({ ...authData }));
            // dispatch(currentUserAction({ ...authData }))
        } else {
            dispatch(loginAction({ ...authData }));
        }
    }



    const onChangeFunc = (e) => {
        setAuthData({ ...authData, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div className='w-full h-screen bg-slate-800 flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 z-50'>
                <div className='w-6/12 bg-black px-24 py-8 rounded-lg'>
                    <div className='flex items-center justify-center'>
                        <BsTwitter size={30} className='text-slate-50 ' />
                    </div>
                    <h1 className='text-3xl text-slate-50 font-bold text-center'>
                        {signUp ? "Bugün Twitter'a katıl" : "Twitter'a giriş yap"}
                    </h1>
                    <div className='flex flex-col space-y-3 my-5'>
                        {signUp && <input value={authData.username} name="username" onChange={onChangeFunc} type="text" placeholder='Username' className='input-style' />}
                        <input value={authData.email} name="email" onChange={onChangeFunc} type="text" placeholder='Email' className='input-style' />
                        <input value={authData.password} name="password" onChange={onChangeFunc} type="password" placeholder='Password' className='input-style' />
                    </div>

                    <div onClick={authFunc} className='w-full p-2 mt-24 text-center bg-white text-black rounded-full cursor-pointer hover:bg-gray-200'>
                        {signUp ? "Kayıt ol" : "Giriş Yap"}
                    </div>
                    <div className='text-zinc-600 text-xs cursor-pointer mt-4'>
                        {signUp ? (<span onClick={() => setSignUp(false)}>Zaten bir hesabın var mı?</span>) : <span onClick={() => setSignUp(true)}>Kayıt olmak için tıklayınız.</span>}
                    </div>
                </div>
            </div>

        </div>
    )
}
