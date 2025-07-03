import React, { useEffect, useState } from 'react'
import UserTable from '../componets/userTable'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser,  fetchUsers } from '../features/users/usersSlice'
import AddUsersForm from '../componets/AdduserForm'
// import ModalForm from '../componets/ModalForm'
function Users() {
    const [editingUser, setEditingUser] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const users = useSelector((state) => state.users.list)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])
    const handleDelete = (id) => {
        console.log(id)
        dispatch(deleteUser(id))
    }
    const handleEdit = (user) => {
        // dispatch(editUser(user))
        setEditingUser(user)
        setIsOpen(true)
    }
    return (
        <div >
            <div className='p-2 bg-gray-200 w-12 rounded-xl' onClick={() => { setIsOpen(!isOpen) }}>ADD</div>
            <UserTable users={users} onDelete={handleDelete} onEdit={handleEdit} />
            
            {
                isOpen && <AddUsersForm setIsOpen={setIsOpen} setEditingUser={setEditingUser} editingUser={editingUser} />
            }
           

        </div>
    )
}

export default Users
