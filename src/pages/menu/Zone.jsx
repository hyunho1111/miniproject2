import React from 'react'

const Zone = ({ selectedRegion, handleRegionChange }) => {
    return (
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

    )
}

export default Zone