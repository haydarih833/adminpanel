// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit"


// export const loginUser = createAsyncThunk('auth/loginUser', async (credentials, thunkAPI) => {
//     try {
//         const res = await fetch('http://localhost:5000/api/auth/login', {
//             method: "POST",
//             headers: { "Contect-Type": "application/json" },
//             body: JSON.stringify(credentials)
//         })
//         if (!res.ok) throw new Error("login failed");
//         const data = await res.json()
//         localStorage.setItem("user",
//             JSON.stringify(data))
//         return data;
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.message)
//     }
// })



// const userFromStorage = JSON.parse(localStorage.getItem("user"))


// const authSlice = createSlice({
//     name: 'auth',
//     initialState: {
//         user: userFromStorage || null,
//         loading: false,
//         error: null
//     },
//     reducers: {
//         logout: (state) => {
//             state.user = null
//             localStorage.removeItem("user")
//         }
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(loginUser.pending, (state) => {
//                 state.loading = true
//                 state.error = null
//             })
//             .addCase(loginUser.fulfilled, (state, action) => {
//                 state.loading = false,
//                     state.user = action.payload
//             })
//             .addCase(loginUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload
//             })
//     }
// })

// export const {logout} = authSlice.actions;
// export default authSlice.reducer;

const initialState = {
    user: null,
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.user = null
            state.isAuthenticated = false
        }
    }
})

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;