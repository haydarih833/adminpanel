import { Button, TextField } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addUser, editUser } from '../../features/users/usersSlice';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup'
// import { yupResolver } from '@hookform/resolvers'


function AddUsersForm({ editingUser, setIsOpen }) {
    const dispatch = useDispatch()
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
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
        setIsOpen(false)
    }

    const schema = yup.object().shape({
        name: yup.string().required('thats filled empty '),
        username: yup.string().required('thats filled empty '),
        email: yup.string().required('thats filled empty '),
        city: yup.string().required('thats filled empty ')
    })


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
                <div className='mt-5'>
                    <Button variant='outlined' color='error' onClick={() => { setIsOpen(false) }}>cancel</Button>
                    <Button type='submit'>confirm</Button>
                </div>
            </form>
        </div>
    )
}

export default AddUsersForm
