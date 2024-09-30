import React from 'react'

const Home = () => {
    return (
        <div className='
        max-w-[572px]
        min-w-[572px]
        h-5/6
        mx-auto
        grid place-items-center
        bg-white'>
            <div>
                <header className='herder flex'>
                    <nav className='menu grid grid-cols-3 w-max'>
                        <button className='zone border-4 w-full border-black' type='button'>지역</button>
                        <button className='partner w-full' type='button'>파트너</button>
                        <button className='maker w-full' type='button'>패이스매이커</button>
                    </nav>
                </header>
            </div>
            <div>
                <p>가운대 내용</p>
            </div>
            <div>
                <button className='activity'>내활동</button>
                <button className='on'>온라인</button>
            </div>
        </div >

    )
}

export default Home