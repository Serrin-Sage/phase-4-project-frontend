import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
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

    }
})

export const { login, logout} = userSlice.actions
export default userSlice.reducer