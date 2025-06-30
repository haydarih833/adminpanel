import React from 'react'
import Navbar from './Navbar'

function Header() {
    return (
        <div className='bg-white h-20 flex justify-between z-50'>
            <div>
                <Navbar />
            </div>
            <div>
                <div className='pt-6'>
                    <input placeholder='search ...' />
                </div>
            </div>

        </div>
    )
}

export default Header
