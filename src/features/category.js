import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {value: {category: ""}}

export const categorySlice = createSlice({
    name: "category",
    initialState: initialStateValue,

    reducers: {
        changeCategory: (state, action) => {
            state.value = action.payload
        },

        defaultCategory: (state, action) => {
            state.value = initialStateValue
        }
    }
})

export const { changeCategory, defaultCategory } = categorySlice.actions
export default categorySlice.reducer