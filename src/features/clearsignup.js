import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { 
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        age: "",
        location: ""
} 

export const clearSignUp = createSlice({
    name: "clearsignup",
    initialState: {value : initialStateValue},

    reducers: {
        resetSignUpForm: (state) => {
            state.value = initialStateValue
        }
    }
})

export const { resetSignUpForm } = clearSignUp.actions
export default clearSignUp.reducer