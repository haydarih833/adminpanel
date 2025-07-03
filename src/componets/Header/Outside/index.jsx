import React, { useState } from 'react'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GroupIcon from '@mui/icons-material/Group';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
function OutSide() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={`${isOpen ? ' translate-0 w-[350px] z-40' : '-translate-x-42 w-0 z-0'} duration-700 bg-slate-900  h-screen absolute left-0 `}>
            <div onClick={() => { setIsOpen(!isOpen) }} className={`${isOpen ? 'left-70' : 'left-10 translate-x-42'} mb-4 p-2 bg-slate-950 hover:bg-slate-700 w-10 rounded-lg absolute top-5 text-white duration-500 text-center`}>
                <div className={`${isOpen ? 'rotate-0 ' : 'rotate-180 '} duration-500`}>
                    <ArrowBackIosIcon />
                </div>
            </div>
            <ul className='py-20 px-5 text-gray-300'>
                <li className='flex hover:text-white hover:bg-slate-800 p-4 rounded-2xl'>
                    <AccountBalanceIcon /><span className='ml-5'> Dashboard</span>
                </li>
                <li className='flex hover:text-white hover:bg-slate-800 p-4 rounded-2xl'>
                    <GroupIcon /><span className='ml-5'> Products</span>
                </li>
                <li className='flex hover:text-white hover:bg-slate-800 p-4 rounded-2xl'>
                    <AccountBalanceIcon /><span className='ml-5'> Dashboard</span>
                </li>
                <li className='flex hover:text-white hover:bg-slate-800 p-4 rounded-2xl'>
                    <AccountBalanceIcon /><span className='ml-5'> Dashboard</span>
                </li>
                <li className='flex hover:text-white hover:bg-slate-800 p-4 rounded-2xl'>
                    <AccountBalanceIcon /><span className='ml-5'> Dashboard</span>
                </li>
            </ul>
        </div>
    )
}

export default OutSide
