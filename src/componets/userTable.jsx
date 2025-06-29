import { Button } from '@mui/material'

const UserTable = ({ users, onDelete, onEdit }) => {
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
                    users.map((items, index) => {
                        return (
                            <tr className='border-b-1 h-10' key={index}>
                                <td>{index}</td>
                                <td>{items.name}</td>
                                <td>{items.username}</td>
                                <td>{items.email}</td>
                                <td>{items.address.city}</td>
                                <td className='text-red-900'><button onClick={() => onDelete(items.id)}>Delete</button></td>
                                <td><Button variant='outlined' onClick={() => onEdit(items.id)} color='error'>Edit</Button></td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>

    )
}

export default UserTable
