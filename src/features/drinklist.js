import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
    list: []
}

export const drinkListSlice = createSlice({
    name: "drinklist",
    initialState: { value: { list: [] } },

    reducers: {
        addDrink: (state, action) => {
            state.value.list = [...state.value.list, action.payload]
        },

        resetList: (state) => {
            state.value = initialStateValue
        }
    }
})

export const { addDrink, resetList } = drinkListSlice.actions
export default drinkListSlice.reducer