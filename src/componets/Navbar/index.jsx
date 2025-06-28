import React from 'react'

function Navbar() {
    return (
        <div className=' h-screen w-[20%] bg-slate-900 text-white'>
        
            <div className='h-28 w-6/12 bg-blue-800 rounded-2xl mx-auto text-center  '>
                <i>icon</i>
                <p>ادمین</p>
            </div>
            <ul className='w-11/12 mx-auto text-right mt-5 '>
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
