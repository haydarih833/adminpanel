import { Button } from '@mui/material'
import React, { useState } from 'react'
import Details from './Details'


const UserTable = ({ dataToShow, type }) => {
    const [detail, setDetail] = useState(false)
    return (
        <table className='w-full font-sans text-xl '>

            {detail &&

                <Details />
            }
            <thead className='bg-slate-900 text-white text-center'>
                {
                    type === 'users' ?
                        <tr className='h-12 border-b-1 border-gray-400'>
                            <th></th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>email</th>
                            <th>City</th>
                        </tr>
                        :
                        <tr className='h-12 border-b-1 border-gray-400'>
                            <th></th>
                            <th>Category</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Gender</th>
                            <th>Size</th>
                        </tr>
                }

            </thead>
            <tbody className='text-center text-white'>
                {
                    type === 'users' ?
                        dataToShow.map((items, index) => {
                            return <tr className='border-b-1 border-gray-400 h-10 bg-slate-800' key={index} onClick={() => {setDetail(true) }}>
                                <td>{index}</td>
                                <td>{items.name}</td>
                                <td>{items.username}</td>
                                <td>{items.email}</td>
                                <td>{items.address.city}</td>
                                <td></td>
                                {/* <td className='text-red-900'><button onClick={() => onDelete(items._id)}>Delete</button></td> */}
                                {/* <td><Button variant='outlined' onClick={() => onEdit(items)} color='error'>Edit</Button></td> */}
                            </tr>
                        })
                        :
                        dataToShow.map((items, index) => {
                            return <tr className='border-b-1 border-gray-400 h-10 bg-slate-800' key={index}>
                                <td>{index}</td>
                                <td>{items.category.name}</td>
                                <td>{items.title}</td>
                                <td>{items.price}</td>
                                <td>{items.gender}</td>
                                <td>{items.size}</td>
                                {/* <td className='text-red-900'><button onClick={() => onDelete(items._id)}>Delete</button></td> */}
                                {/* <td><Button variant='outlined' onClick={() => onEdit(items)} color='error'>Edit</Button></td> */}
                            </tr>
                        })

                }
            </tbody>
        </table>

    )
}

export default UserTable
