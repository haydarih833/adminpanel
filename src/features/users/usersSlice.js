import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//GET USERS
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const res = await fetch("http://localhost:5000/api/users")
    return await res.json()
})
// POST USER
export const createUser = createAsyncThunk("users/createUser", async (userData) => {
    const res = await fetch("http://localhost:5000/api/users", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    });
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    toast.success('User added successfully');
    return await res.json()
})

export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {

    await fetch(`http://localhost:5000/api/users/${id}`, {
        method: "DELETE",
    })
    return id;
})

export const editUser = createAsyncThunk("users/editUser", async ({ id, updatedData }) => {
    const res = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
    })
    return await res.json()
}
)

const userSlice = createSlice({
    name: 'users',
    initialState: { list: [], loading: false },
    reducers: {
        setUsers: (state, action) => {
            state.list = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false,
                    state.list = action.payload
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.list.push(action.payload)
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
               state.list = state.list.filter((user) =>user._id !== action.payload)
            })
            .addCase(editUser.fulfilled, (state, action) => {
                const updated = action.payload;
                const index = state.list.findIndex((u) => u._id === updated._id);
                if (index !== -1) {
                    state.list[index] = updated
                }
            });
    }
})
export const { setUsers } = userSlice.actions;
export default userSlice.reducer;