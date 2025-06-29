import React, { useState } from 'react'
import Users from '../../pages/users'
import AddUsersForm from '../AdduserForm'
const DashBorad = () => {
    const [add, setAdd] = useState(false)
    return (

        <div className='grid'>
            <div className='grid grid-cols-4 gap-2'>
                <div className='bg-white rounded-lg h-30'>
                    salam
                </div>
                <div className='bg-white rounded-lg h-30'>
                    salam
                </div>
                <div className='bg-white rounded-lg h-30'>
                    salam
                </div>
                <div className='bg-white rounded-lg h-30'>
                    salam
                </div>
            </div>
            <div className='bg-white mt-4 h-86 p-3 overflow-y-scroll'>
                <div className='p-2 bg-gray-200 w-12 rounded-xl' onClick={() => { setAdd(!add) }}>ADD</div>
                {
                    add && <AddUsersForm add={add} setAdd={setAdd} />
                }

                <div className=''>
                    <Users />
                </div>
            </div>
        </div>
    )
}

export default DashBorad
