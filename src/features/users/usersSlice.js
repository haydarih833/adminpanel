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
        }
    }
})
export const { setUsers, addUser, deleteUser } = usersSlice.actions
export default usersSlice.reducer