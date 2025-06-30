import React, { useEffect, useState } from 'react'
import UserTable from '../componets/userTable'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, setUsers } from '../features/users/usersSlice'
import AddUsersForm from '../componets/AdduserForm'
import ModalForm from '../componets/ModalForm'
function Users() {
    const [editingUser, setEditingUser] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
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
        setIsOpen(true)
    }
    return (
        <div >
            <div className='p-2 bg-gray-200 w-12 rounded-xl' onClick={() => { setIsOpen(!add) }}>ADD</div>
            <UserTable users={users} onDelete={handleDelete} onEdit={handleEdit} />
           <ModalForm isOpen={isOpen} setIsOpen={setIsOpen}>
            {
                isOpen && <AddUsersForm setIsOpen={setIsOpen} editingUser={editingUser} />
            }
           </ModalForm>

        </div>
    )
}

export default Users
