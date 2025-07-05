import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
function SignUp() {
    const [isEdit, setIsEdit] = useState(false)
    return (
        <div className='w-full h-screen bg-zinc-900 absolute top-0 left-0 pt-5'>
            <div className='w-9/12 h-10/12 mt-10 mx-auto bg-white rounde-2xl p-10 text-xl grid'>
                <div className='grid grid-cols-2 gap-10'>
                    <div>
                        <TextField className='w-full' type='name' variant='outlined' label='Name' />
                    </div>
                    <div>
                        <TextField className='w-full' type='username' variant='outlined' label='Username' />
                    </div>
                </div>
                <TextField type='email' variant='outlined' label='Email' />
                <TextField type='Phone' variant='outlined' label='Phone' />
                <TextField type='Company' variant='outlined' label='Company' />
                <div className='pt-10 text-end'>
                    <Button variant='outlined' onClick={() => { setIsEdit(false) }}>confirm</Button>
                    <Button color='error' onClick={() => { window.location.href = '/users' }}>cancel</Button>
                </div>
            </div>
        </div>
    )
}

export default SignUp





