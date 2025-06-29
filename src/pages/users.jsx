import React, { useEffect, useState } from 'react'
import UserTable from '../componets/userTable'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, setUsers } from '../features/users/usersSlice'
import AddUsersForm from '../componets/AdduserForm'

function Users() {
    const [editingUser, setEditingUser] = useState(null)
    const [add, setAdd] = useState(false)
    const users = useSelector((state) => state.users.list)
    const dispatch = useDispatch()
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => dispatch(setUsers(data)))
    }, [])
    const handleDelete = (id) => {
        dispatch(deleteUser(id))
    }
    const handleEdit = (user) => {
        setEditingUser(user)
        setAdd(true)
    }
    return (
        <div >
            <div className='p-2 bg-gray-200 w-12 rounded-xl' onClick={() => { setAdd(!add) }}>ADD</div>
            <UserTable users={users} onDelete={handleDelete} onEdit={handleEdit} />
            {
                add && <AddUsersForm setAdd={setAdd} editingUser={editingUser} />
            }
        </div>
    )
}

export default Users
