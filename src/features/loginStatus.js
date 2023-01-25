import { createSlice } from '@reduxjs/toolkit'

export const statusSlice = createSlice({
    name: "status",
    initialState: { value: { loggedIn: false }},

    reducers: {
        loginStatus: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { loginStatus } = statusSlice.actions
export default statusSlice.reducer