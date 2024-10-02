import React from 'react'

const Partner = () => {
    return (
        <div className='mt-4 w-full h-96 bg-gray-100 rounded-lg p-4 grid grid-cols-3 gap-4'>
            <button className='bg-yellow-400 rounded-lg p-2 shadow'>내 파트너</button>
            <button className='bg-yellow-400 rounded-lg p-2 shadow'>파트너 찾기</button>
            <button className='bg-yellow-400 rounded-lg p-2 shadow'>인가 파트너</button>
        </div>
    )
}

export default Partner