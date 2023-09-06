import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const paletteSlice = createSlice({
  name: 'palette',
  initialState,
  reducers: {
    loadPalettes: (state, action) => {
        const newArray = [...action.payload];
        state.value = newArray;
    },
    addNewPalette: (state, action) => {
        const newArray = [...state.value, action.payload];
        state.value = newArray;
    }
  },
})

// Action creators are generated for each case reducer function
export const { loadPalettes, addNewPalette } = paletteSlice.actions

export default paletteSlice.reducer