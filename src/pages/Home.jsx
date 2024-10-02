import React, { useState } from 'react';

const Home = () => {
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
            {!showChat && !showDistanceOptions && !showPartnerOptions && !showActivities && (
                <div className='mt-4 w-full h-96 bg-gray-100 rounded-lg p-4'>
                    <p className='text-center text-lg font-bold mb-4'>지역을 선택하세요</p>

                    <div className='grid grid-cols-3 gap-4'>
                        {/* 시 선택 */}
                        <div className='flex flex-col items-center'>
                            <label className='text-gray-700 mb-2'>시</label>
                            <select
                                value={selectedRegion.si}
                                onChange={(e) => handleRegionChange('si', e.target.value)}
                                className='border rounded-full px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400'
                            >
                                <option value="">선택하세요</option>
                                <option value="서울">서울</option>
                                <option value="부산">부산</option>
                                <option value="대구">대구</option>
                            </select>
                        </div>

                        {/* 구 선택 */}
                        <div className='flex flex-col items-center'>
                            <label className='text-gray-700 mb-2'>구</label>
                            <select
                                value={selectedRegion.gu}
                                onChange={(e) => handleRegionChange('gu', e.target.value)}
                                className='border rounded-full px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400'
                            >
                                <option value="">선택하세요</option>
                                <option value="강남구">강남구</option>
                                <option value="서초구">서초구</option>
                                <option value="송파구">송파구</option>
                            </select>
                        </div>

                        {/* 동 선택 */}
                        <div className='flex flex-col items-center'>
                            <label className='text-gray-700 mb-2'>동</label>
                            <select
                                value={selectedRegion.dong}
                                onChange={(e) => handleRegionChange('dong', e.target.value)}
                                className='border rounded-full px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400'
                            >
                                <option value="">선택하세요</option>
                                <option value="신사동">신사동</option>
                                <option value="압구정동">압구정동</option>
                                <option value="잠실동">잠실동</option>
                            </select>
                        </div>
                    </div>
                </div>
            )}

            {/* 거리 선택 버튼 */}
            {showDistanceOptions && (
                <div className='mt-4 w-full h-96 bg-gray-100 rounded-lg p-4 grid grid-cols-4 gap-4'>
                    <button className='bg-yellow-400 rounded-lg p-2 shadow'>5km</button>
                    <button className='bg-yellow-400 rounded-lg p-2 shadow'>10km</button>
                    <button className='bg-yellow-400 rounded-lg p-2 shadow'>Half</button>
                    <button className='bg-yellow-400 rounded-lg p-2 shadow'>Full</button>
                </div>
            )}

            {/* 파트너 버튼 UI */}
            {showPartnerOptions && (
                <div className='mt-4 w-full h-96 bg-gray-100 rounded-lg p-4 grid grid-cols-3 gap-4'>
                    <button className='bg-yellow-400 rounded-lg p-2 shadow'>내 파트너</button>
                    <button className='bg-yellow-400 rounded-lg p-2 shadow'>파트너 찾기</button>
                    <button className='bg-yellow-400 rounded-lg p-2 shadow'>인가 파트너</button>
                </div>
            )}

            {/* 내 활동 버튼 클릭 시 표시 */}
            {showActivities && (
                <div className='mt-4 w-full h-96 bg-gray-100 rounded-lg p-4 overflow-y-auto'>
                    <h2 className='text-center text-lg font-bold mb-4'>내 활동 기록</h2>
                    <div className='grid grid-cols-1 gap-4'>
                        {activityRecords.map((record, idx) => (
                            <div key={idx} className='bg-white p-4 rounded-lg shadow'>
                                <p className='font-semibold'>{record.date} {record.activity}</p>
                                <p>거리: {record.distance}</p>
                                <p>시간: {record.time}</p>
                                <p>페이스: {record.pace}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* 채팅방 내용 */}
            {showChat && (
                <div className='mt-4 w-full h-96 bg-gray-100 rounded-lg p-4 overflow-y-scroll'>
                    {messages.length === 0 ? (
                        <p className='text-gray-500 text-center'>채팅 메시지가 없습니다</p>
                    ) : (
                        messages.map((msg, idx) => (
                            <div key={idx} className='mb-2'>
                                <p className='bg-white p-2 rounded-lg shadow'>{msg}</p>
                            </div>
                        ))
                    )}
                </div>
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
                    onClick={() => {
                        // 로그아웃 처리 (여기에 로그아웃 로직 추가)
                        alert('로그아웃 되었습니다.');
                    }}
                >
                    로그아웃
                </button>
            </div>
        </div>
    );
};

export default Home;
