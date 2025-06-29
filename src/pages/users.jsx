import React, { useEffect } from 'react'
import UserTable from '../componets/userTable'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, setUsers } from '../features/users/usersSlice'

function Users() {
    const users = useSelector((state) => state.users.list)
 
    console.log(users)
    const dispatch = useDispatch()
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => dispatch(setUsers(data)))
    }, [])
    const handleDelete = (id) => {
        dispatch(deleteUser(id))
    }
    return (
        <div >
            <UserTable users={users} onDelete={handleDelete} />
        </div>
    )
}

export default Users
