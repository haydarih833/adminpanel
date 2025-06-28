import React, { useState } from 'react'

function Navbar() {
    const [active, setActive] = useState(true);
    const handleShowHidden = () => {
        setActive(!active)
    }
    return (
        <div className={`${active ? 'w-60 ' : 'w-0'} duration-500 h-screen  bg-slate-900 text-white text-right`}>
            <div className={`mb-4 p-2 bg-slate-800 hover:bg-slate-700 w-10 rounded-lg absolute  ${active ? 'left-48' : 'left-4'} duration-500`}>
                <button onClick={handleShowHidden}>
                    key
                </button>
            </div>
            <div className={`${active ? '' : ' -translate-x-24'} duration-400 h-28 w-6/12 bg-slate-800 rounded-2xl mx-auto text-center pt-4 translate-y-12`} >
                <i>icon</i>
                <p>ادمین</p>
            </div>
            <ul className={`${active ? '' : '-translate-x-24 '} duration-700 w-11/12 mx-auto translate-y-14`}>
                <li className='hover:bg-slate-800 px-9 py-1 rounded-lg'><button>داشبورد</button></li>
                <li className='hover:bg-slate-800 px-9 py-1 rounded-lg'><button>داشبورد</button></li>
                <li className='hover:bg-slate-800 px-9 py-1 rounded-lg'><button>داشبورد</button></li>
                <li className='hover:bg-slate-800 px-9 py-1 rounded-lg'><button>داشبورد</button></li>
                <li className='hover:bg-slate-800 px-9 py-1 rounded-lg'><button>داشبورد</button></li>
            </ul>
        </div>
    )
}

export default Navbar
