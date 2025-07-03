import { Button } from '@mui/material'
import React from 'react'
import Details from './Details'

// const UserTable = ({ dataToShow, onDelete, onEdit }) => {
//     console.log(dataToShow)
//     return (
//         <table className='w-full text-center'>
//             <thead>
//                 <tr>
//                     <th></th>
//                     <th>Name</th>
//                     <th>Username</th>
//                     <th>email</th>
//                     <th>City</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     dataToShow.map((items, index) => {
//                         return (
//                             <tr className='border-b-1 h-10' key={index}>
//                                 <td>{index}</td>
//                                 <td>{items.name}</td>
//                                 <td>{items.username}</td>
//                                 <td>{items.email}</td>
//                                 {/* <td>{items.address.city}</td> */}
//                                 {/* <td className='text-red-900'><button onClick={() => onDelete(items._id)}>Delete</button></td> */}
//                                 {/* <td><Button variant='outlined' onClick={() => onEdit(items)} color='error'>Edit</Button></td> */}
//                             </tr>
//                         )
//                     })
//                 }
//             </tbody>
//         </table>

//     )
// }

const UserTable = ({ dataToShow }) => {
    return (
        <table className='w-full text-center font-sans text-xl text-white '>
            <thead className='bg-slate-900'>
                <tr className='h-12 border-b-1 border-gray-400'>
                    <th></th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>email</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {
                    dataToShow.map((items, index) => {
                        return <tr className='border-b-1 border-gray-400 h-10 bg-slate-800' key={index}>
                            <td>{index}</td>
                            <td>{items.name}</td>
                            <td>{items.username}</td>
                            <td>{items.email}</td>
                            <td>{items.address.city}</td>
                            {/* <td></td> */}
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
