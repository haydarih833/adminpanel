import { Button, TextField } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createUser, editUser, } from '../../features/users/usersSlice';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup'
import { addUser } from '../../../backend/controllers/userController';
import { Textarea } from '@material-tailwind/react';
// import { addUser, updateUser } from '../../../backend/controllers/userController';
// import { yupResolver } from '@hookform/resolvers'


const schema = yup.object().shape({
    name: yup.string().required('thats filled empty '),
    username: yup.string().required('thats filled empty '),
    email: yup.string().required('thats filled empty '),
    city: yup.string().required('thats filled empty ')
})


function AddUsersForm({ editingUser, setIsOpen }) {

    const dispatch = useDispatch()
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({})
    useEffect(() => {
        if (editingUser) {
            setValue('name', editingUser.name),
                setValue('username', editingUser.username),
                setValue('email', editingUser.email),
                setValue('city', editingUser.address?.city || '')
        }
    }, [editingUser, setValue])


    const onSubmit = async (data) => {
        if (editingUser) {
            dispatch(editUser({
                id: editingUser._id, updatedDate: {
                    name: data.name,
                    username: data.username,
                    email: data.email,
                    address: { city: data.city }
                }
            }))
        } else {
            dispatch(addUser({}));
        }
        dispatch(createUser(data))
        reset()
        setIsOpen(false);
    };


    return (
        <div className='absolute w-10/12 h-10/12 bg-white left-1/12 top-4 p-4 rounded-2xl'>
            <p className='text-black mb-5'>Add User</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid gap-3'>
                    <TextField
                        {...register('name')}
                        name="name"
                        label="Name"
                        variant="outlined"
                        color='info'
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                    <TextField
                        {...register('username')}
                        name="username"
                        label="Username"
                        variant="outlined"
                        color='info'
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                    <TextField
                        {...register('email')}
                        name="email"
                        label="Email"
                        variant="outlined"
                        color='info'
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                    <TextField
                        {...register('city')}
                        name="city"
                        label="City"
                        variant="outlined"
                        color='info'
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div className='mt-5 text-end'>
                    <Button variant='outlined' color='error' onClick={() => { setIsOpen(false) }}>cancel</Button>
                    <Button type='submit'>confirm</Button>
                </div>
            </form>
        </div>
    )
}

export default AddUsersForm
