import React from 'react'

const On = ({ messages }) => {
    return (
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
    )
}

export default On