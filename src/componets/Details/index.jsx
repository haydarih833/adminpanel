import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
function Details() {
    const [isEdit, setIsEdit] = useState(false)
    return (
        <div className='w-full h-screen bg-zinc-900 absolute top-0 left-0 pt-5'>
            <div className='w-9/12 h-10/12 mt-10 mx-auto bg-white rounde-2xl p-10 text-xl grid fon'>
                <div className='grid grid-cols-2 gap-10'>
                    <div>
                        <p>Name</p>
                        {
                            isEdit ?
                                <TextField className='w-full' type='name' variant='outlined' label='Name' />
                                :
                                <p>ss</p>
                        }
                    </div>
                    <div>
                        <p>Username</p>
                        {isEdit ?
                            <TextField className='w-full' type='username' variant='outlined' label='Username' />
                            :
                            <p>salam</p>
                        }
                    </div>
                </div>
                <p>Email</p>
                {
                    isEdit ?
                        <TextField type='email' variant='outlined' label='Email' />
                        :
                        <p>slala</p>
                }
                <p>Address</p>
                {
                    isEdit ?
                        <TextField type='Address' variant='outlined' label='Address' />
                        :
                        <p>ddw</p>

                }
                <p>Phone</p>
                {
                    isEdit ?
                        <TextField type='Phone' variant='outlined' label='Phone' />
                        :
                        <p>+9899969696969</p>
                }
                <p>Company</p>
                {
                    isEdit ?
                        <TextField type='Company' variant='outlined' label='Company' />
                        :
                        <p>ddddddddddddddddddddddddddddd</p>
                }
                <div className='pt-10 text-end'>
                    {
                        isEdit ?
                            <Button variant='outlined' onClick={() => { setIsEdit(false) }}>confirm</Button>
                            :
                            <Button variant='outlined' onClick={() => { setIsEdit(true) }}>Edit</Button>
                    }
                    <Button color='error'>cancel</Button>
                </div>
            </div>
        </div>
    )
}

export default Details





