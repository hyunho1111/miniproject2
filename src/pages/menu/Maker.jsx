import React from 'react'

const Maker = () => {
    return (
        <div className='mt-4 w-full h-96 bg-gray-100 rounded-lg p-4 grid grid-cols-4 gap-4'>
            <button className='bg-yellow-400 rounded-lg p-2 shadow'>5km</button>
            <button className='bg-yellow-400 rounded-lg p-2 shadow'>10km</button>
            <button className='bg-yellow-400 rounded-lg p-2 shadow'>Half</button>
            <button className='bg-yellow-400 rounded-lg p-2 shadow'>Full</button>
        </div>
    )
}

export default Maker