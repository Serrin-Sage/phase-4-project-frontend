import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {value: {username: ""}}
export const userSlice = createSlice({
    name: "user",
    initialState: initialStateValue,

    reducers: {
        login: (state, action) => {
            state.value = action.payload
        }, 

        logout: (state, action) => {
            state.value = initialStateValue
        },
    }
})

export const { login, logout} = userSlice.actions
export default userSlice.reducer