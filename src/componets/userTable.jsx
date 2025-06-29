import React from 'react'

const UserTable = ({ users,onDelete }) => {
    return (
        <table className='w-full text-center'>
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>email</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(items => {
                        return (
                            <tr className='border-b-1 h-10' key={items.id}>
                                <td>{items.id}</td>
                                <td>{items.name}</td>
                                <td>{items.username}</td>
                                <td>{items.email}</td>
                                {/* <td>{users.address.city}</td> */}
                                <td className='text-red-900'><button onClick={()=>onDelete(items.id)}>Delete</button></td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>

    )
}

export default UserTable
