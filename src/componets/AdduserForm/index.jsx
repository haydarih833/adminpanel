import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser, editUser } from '../../features/users/usersSlice';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

function AddUsersForm({ editingUser, setAdd }) {
    const dispatch = useDispatch()
    const { register, handleSubmit, reset, setValue } = useForm()
    useEffect(() => {
        if (editingUser) {
            setValue('name', editingUser.name),
                setValue('username', editingUser.username),
                setValue('email', editingUser.email),
                setValue('city', editingUser.address?.city)
        }
    }, [])

    const onSubmit = async (data) => {
        const user = {
            id: editingUser ? editingUser : Date.now(),
            name: data.name,
            username: data.username,
            email: data.email,
            address: {
                city: data.city
            }
        }
        if (editingUser) {
            dispatch(editUser(user))
            toast.info('edit user successfully')
        } else {
            dispatch(addUser(user))
            toast.success('add new user successfully')
        }
        reset()
        setAdd(false)
    }

    return (
        <div className='absolute w-10/12 h-96 bg-slate-700 top-4 p-4 rounded-2xl'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid gap-3 text-white'>
                    <TextField
                        {...register('name')}
                        name="name"
                        label="Name"
                        variant="outlined"
                        color='info'
                    />
                    <TextField
                        {...register('username')}
                        name="username"
                        label="Username"
                        variant="outlined"
                        color='info'
                    />
                    <TextField
                        {...register('email')}
                        name="email"
                        label="Email"
                        variant="outlined"
                        color='info'
                    />
                    <TextField
                        {...register('city')}
                        name="city"
                        label="City"
                        variant="outlined"
                        color='info'
                    />
                </div>
                <div className='mt-5'>
                    <Button variant='outlined' color='error' onClick={() => { setAdd(false) }}>cancel</Button>
                    <Button type='submit'>confirm</Button>
                </div>
            </form>
        </div>
    )
}

export default AddUsersForm
