import React from 'react';
import logo from './images/Runpartner.jpg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleGoogleLogin = () => {
        // 구글 로그인 로직을 여기에 추가
        navigate('/home'); // 홈 화면으로 이동
    };

    const handlePhoneLogin = () => {
        // 전화번호 로그인 로직을 여기에 추가
        navigate('/home'); // 홈 화면으로 이동
    };

    return (
        <div className='
            max-w-[572px]
            min-w-[572px]
            h-5/6
            mx-auto
            grid place-items-center
            bg-white'>

            {/* 로고 logo */}
            <img src={logo} alt="logo" />

            <main className='flex flex-col items-center'>
                {/* 구글 로그인 버튼 */}
                <button
                    className='login-g bg-black text-white w-64 h-12 mb-4 rounded-none'
                    type='button'
                    onClick={handleGoogleLogin} // 클릭 시 구글 로그인 함수 호출
                >
                    구글 로그인
                </button>

                {/* 전화번호 로그인 버튼 */}
                <button
                    className='login-p bg-black text-white w-64 h-12 rounded-none'
                    type='button'
                    onClick={handlePhoneLogin} // 클릭 시 전화번호 로그인 함수 호출
                >
                    전화번호 로그인
                </button>
            </main>
        </div>
    );
};

export default Login;
