import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material'
import OutSide from './Outside'

function Header() {
    return (
        <div className='bg-white h-20 flex justify-between  z-30'>
            <div>
                <OutSide />
            </div>
            <div className='pt-3 text-slate-900 text-4xl w-20'>
                <SearchIcon />
            </div>


        </div>
    )
}

export default Header
