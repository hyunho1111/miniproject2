
import React from 'react';
import logo from './images/Runpartner.jpg'

const Login = () => {
    return (
        <div className='
            max-w-[572px]
            min-w-[572px]
            h-5/6
            mx-auto
            grid place-items-center
            bg-white'>

            {/* 로고 logo */}
            <img src={logo} alt="logo"></img>

            <main className='flex flex-col items-center'>
                {/* 구글 로그인 버튼 */}
                <button
                    className='login-g bg-black text-white w-64 h-12 mb-4 rounded-none'
                    type='button'>
                    구글 로그인
                </button>

                {/* 전화번호 로그인 버튼 */}
                <button
                    className='login-p bg-black text-white w-64 h-12 rounded-none'
                    type='button'>
                    전화번호 로그인
                </button>

            </main>
        </div>
    );
};

export default Login;


