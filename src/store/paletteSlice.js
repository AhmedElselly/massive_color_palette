import { createSlice } from '@reduxjs/toolkit'
import seedColors from '../seedColors';

const initialState = {
  value: [],
}

// load first time
  // feed data to localstorage
  // load data in each page individually

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
      localStorage.setItem('data', JSON.stringify(newArray));
      state.value = JSON.parse(localStorage.getItem('data'));
    },
    removePalette: (state, action) => {
      const newArray = [...action.payload];
      localStorage.setItem('data', JSON.stringify(newArray));
      state.value = JSON.parse(localStorage.getItem('data'));
    }
  },
})

export const { loadPalettes, addNewPalette, removePalette } = paletteSlice.actions

export default paletteSlice.reducer