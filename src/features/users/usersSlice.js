import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: []
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.list = action.payload
        },
        addUser: (state, action) => {
            state.list.push(action.payload)
        },
        deleteUser: (state, action) => {
            state.list = state.list.filter(item => item.id !== action.payload)
        },
        editUser: (state, action) => {
            const index = state.list.findIndex(user => action.payload.id);
            if (index !== -1) {
                state.list[index] = action.payload
            }
        }
    }
})
export const { setUsers, addUser, deleteUser, editUser } = usersSlice.actions
export default usersSlice.reducer