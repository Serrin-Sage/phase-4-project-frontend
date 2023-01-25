import { createSlice } from '@reduxjs/toolkit'

export const drinkListSlice = createSlice({
    name: "drinklist",
    initialState: { value: { list: [] } },

    reducers: {
        addDrink: (state, action) => {
            state.value.list = [...state.value.list, action.payload]
        }
    }
})

export const { addDrink } = drinkListSlice.actions
export default drinkListSlice.reducer