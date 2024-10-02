import React, { useEffect, useState } from 'react';
import Zone from './menu/Zone';
import Partner from './menu/Partner';
import Maker from './menu/Maker';
import Activity from './menu/Activity';
import On from './On';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const history = useNavigate()

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [showChat, setShowChat] = useState(true); // 채팅창 표시 여부
    const [selectedRegion, setSelectedRegion] = useState({
        si: '',
        gu: '',
        dong: ''
    });
    const [showDistanceOptions, setShowDistanceOptions] = useState(false); // 거리 선택 UI 표시 여부
    const [showPartnerOptions, setShowPartnerOptions] = useState(false); // 파트너 옵션 표시 여부
    const [showActivities, setShowActivities] = useState(false); // 내 활동 표시 여부

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, input]);
            setInput(''); // 메시지를 전송한 후 입력 필드 초기화
        }
    };

    // 지역 선택 처리 함수
    const handleRegionChange = (type, value) => {
        setSelectedRegion({
            ...selectedRegion,
            [type]: value
        });
    };

    // 내 활동 데이터 예시
    const activityRecords = [
        { date: '10.02', activity: '러닝', distance: '5km', time: '30:00', pace: '6:00/km' },
        { date: '10.01', activity: '러닝', distance: '10km', time: '1:00:00', pace: '6:00/km' },
        { date: '09.30', activity: '하프 마라톤', distance: '21.1km', time: '2:00:00', pace: '5:40/km' },
        { date: '09.25', activity: '풀 마라톤', distance: '42.195km', time: '4:00:00', pace: '5:41/km' }
    ];

    useEffect(() => {
        if (!auth.currentUser) { history("/login") }
    }, [])
    return (
        <div className='
        max-w-[572px]
        min-w-[572px]
        h-5/6
        mx-auto
        grid place-items-center
        bg-white border rounded-lg p-4 shadow-lg'>

            {/* 헤더 부분을 그리드의 맨 위에 배치 */}
            <header className='w-full'>
                <nav className='menu grid grid-cols-3 w-full'>
                    <button
                        className='zone py-2 bg-yellow-400 rounded-full'
                        type='button'
                        onClick={() => {
                            setShowChat(false);
                            setShowDistanceOptions(false); // 지역 버튼 클릭 시 거리 선택 UI 숨김
                            setShowPartnerOptions(false); // 파트너 옵션 숨김
                            setShowActivities(false); // 내 활동 숨김
                        }} // 지역 버튼 클릭 시 채팅창 숨김
                    >
                        지역
                    </button>
                    <button
                        className='partner py-2 bg-yellow-400 rounded-full'
                        type='button'
                        onClick={() => {
                            setShowChat(false);
                            setShowDistanceOptions(false); // 거리 선택 UI 숨김
                            setShowPartnerOptions(true); // 파트너 옵션 표시
                            setShowActivities(false); // 내 활동 숨김
                        }}
                    >
                        파트너
                    </button>
                    <button
                        className='maker py-2 bg-yellow-400 rounded-full'
                        type='button'
                        onClick={() => {
                            setShowChat(false);
                            setShowDistanceOptions(true); // 패이스매이커 클릭 시 거리 선택 UI 표시
                            setShowPartnerOptions(false); // 파트너 옵션 숨김
                            setShowActivities(false); // 내 활동 숨김
                        }}
                    >
                        패이스매이커
                    </button>
                </nav>
            </header>

            {/* 지역 선택 창 */}
            {!showChat && !showDistanceOptions && !showPartnerOptions && !showActivities && (<Zone selectedRegion={selectedRegion} handleRegionChange={handleRegionChange} />)}

            {/* 거리 선택 버튼 */}
            {showDistanceOptions && (<Maker />)}

            {/* 파트너 버튼 UI */}
            {showPartnerOptions && (<Partner />)}

            {/* 내 활동 버튼 클릭 시 표시 */}
            {showActivities && (<Activity activityRecords={activityRecords} />)}

            {/* 채팅방 내용 */}
            {showChat && (<On messages={messages} />
            )}

            {/* 채팅 입력란 */}
            {showChat && (
                <div className='w-full mt-4 flex'>
                    <input
                        type='text'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className='w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400'
                        placeholder='메시지를 입력하세요...'
                    />
                    <button
                        onClick={handleSend}
                        className='ml-2 bg-yellow-400 text-white px-4 py-2 rounded-full shadow-md'
                    >
                        전송
                    </button>
                </div>
            )}

            {/* 하단 버튼 */}
            <div className='grid grid-cols-3 w-full mt-4'>
                <button
                    className='activity py-2 bg-yellow-400 rounded-full'
                    onClick={() => {
                        setShowActivities(true); // 내 활동 버튼 클릭 시 내 활동 표시
                        setShowChat(false); // 채팅창 숨김
                        setShowDistanceOptions(false); // 거리 선택 UI 숨김
                        setShowPartnerOptions(false); // 파트너 옵션 숨김
                    }}
                >
                    내활동
                </button>
                <button
                    className='on py-2 bg-yellow-400 rounded-full'
                    onClick={() => {
                        setShowChat(true); // 온라인 버튼 클릭 시 채팅창 표시
                        setShowDistanceOptions(false); // 거리 선택 UI 숨김
                        setShowPartnerOptions(false); // 파트너 옵션 숨김
                        setShowActivities(false); // 내 활동 숨김
                    }}
                >
                    온라인
                </button>
                <button
                    className='logout py-2 bg-red-400 text-white rounded-full'
                    onClick={async () => {
                        // 로그아웃 처리 (여기에 로그아웃 로직 추가)
                        const ok = window.confirm("정말 로그아웃 하시겠습니까?");

                        if (!ok) return; // 아니요 선택시 다음 줄 실행안함

                        // 1. 파이어베이스에게 로그아웃 요청
                        try {
                            // await signOut(auth)
                            await auth.signOut();
                        } catch (error) {
                            console.error(error);
                        }

                        // 2. 로그인 화면으로 리다이렉트
                        history("/login");
                    }}
                >
                    로그아웃
                </button>
            </div>
        </div>
    );
};

export default Home;
