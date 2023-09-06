import { configureStore } from '@reduxjs/toolkit'
import paletteSlice from './paletteSlice'

export const store = configureStore({
  reducer: {
    palettes: paletteSlice
  },
})