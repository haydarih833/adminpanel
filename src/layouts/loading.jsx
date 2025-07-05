import React, { useEffect } from 'react'
import UserTable from '../componets/userTable'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../features/users/usersSlice'
import Details from '../componets/Details'
import { fetchProducts } from '../features/users/productsSlice'

const Layout = ({ type }) => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users.list)
    const products = useSelector((state) => state.products.list)
    const dataToShow = type === "users" ? users : products
    console.log(dataToShow)
    useEffect(() => {
        if (type === 'users') {
            dispatch(fetchUsers())
        }
        if (type === 'products') {
            dispatch(fetchProducts())
        }

    }, [type, dispatch])
    return (
        <div className='mt-5'>
            {/* <Details /> */}
            <div className='w-11/12 mx-auto gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
                <div className='w-full h-52 bg-slate-400 rounded-2xl anim'></div>
                <div className='w-full h-52 bg-slate-500 rounded-2xl'></div>
                <div className='w-full h-52 bg-slate-600 rounded-2xl'></div>
                <div className='w-full h-52 bg-slate-800 rounded-2xl'></div>
            </div>
            <div className=' bg-emerald-950 w-11/12 h-96 mx-auto mt-2 rounded-2xl '>
                
            </div>
        </div>
    )
}

export default Layout
