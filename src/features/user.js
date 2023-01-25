import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    age: "",
    location: "",
    logged_in: 0,
}
export const userSlice = createSlice({
    name: "user",
    initialState: initialStateValue,

    reducers: {
        login: (state, action) => {
            state.value = action.payload
        }, 

        logout: (state) => {
            state.value = initialStateValue
        },

        loginStatus: (state) => {
            state.value = action.payload
        }
    }
})

export const { login, logout, loginStatus} = userSlice.actions
export default userSlice.reducer