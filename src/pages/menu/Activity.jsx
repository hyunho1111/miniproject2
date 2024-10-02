import React from 'react'

const Activity = ({ activityRecords }) => {
    return (
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
    )
}

export default Activity