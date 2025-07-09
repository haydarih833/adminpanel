import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../features/users/usersSlice'
import { fetchProducts } from '../features/users/productsSlice'
import UserTable from '../componets/userTable'

const Layout = ({ type }) => {
  const dispatch = useDispatch()

  const users = useSelector((state) => state.users.list)
  const products = useSelector((state) => state.products.list)
  const loading = useSelector((state) =>
    type === 'users' ? state.users.loading : state.products.loading
  )

  const dataToShow = type === 'users' ? users : products

  useEffect(() => {
    if (type === 'users') dispatch(fetchUsers())
    if (type === 'products') dispatch(fetchProducts())
  }, [type, dispatch])

  return (
    <div className='mt-5'>
      {/* Cards */}
      <div className='w-11/12 mx-auto gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-white text-3xl sm:text-4xl text-center font-bold'>
        <div className='w-full h-40 sm:h-52 bg-slate-400 rounded-2xl flex items-center justify-center flex-col shadow-md'>
          <span>{products.length}</span>
          <span className='text-lg sm:text-xl font-normal mt-2'>Products</span>
        </div>

        <div className='w-full h-40 sm:h-52 bg-slate-500 rounded-2xl flex items-center justify-center flex-col shadow-md'>
          <span>{users.length}</span>
          <span className='text-lg sm:text-xl font-normal mt-2'>Users</span>
        </div>

        <div className='w-full h-40 sm:h-52 bg-slate-600 rounded-2xl flex items-center justify-center flex-col shadow-md'>
          <span className='text-lg sm:text-xl'>Feature</span>
          <span className='text-sm text-gray-200'>Coming soon</span>
        </div>

        <div className='w-full h-40 sm:h-52 bg-slate-800 rounded-2xl flex items-center justify-center flex-col shadow-md'>
          <span className='text-lg sm:text-xl'>Coming soon</span>
        </div>
      </div>

      {/* Table */}
      <div className='bg-emerald-950 w-11/12 mx-auto mt-4 rounded-2xl text-white shadow-lg overflow-x-auto'>
        {loading ? (
          <div className="flex justify-center items-center h-[300px]">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <UserTable dataToShow={dataToShow} type={type} />
        )}
      </div>
    </div>
  )
}

export default Layout