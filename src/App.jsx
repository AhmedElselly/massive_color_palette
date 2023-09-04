import { Fragment, useState } from 'react'
import Palette from './Components/Palette'
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import { Route, Routes } from 'react-router-dom';
import PaletteList from './Components/PaletteList';
import SingleColorPalette from './Components/SingleColorPalette';
import CreatePalette from './Components/CreatePalette';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PaletteList seedColors={seedColors} />} />
      <Route path='/palettes/create' element={<CreatePalette/>} />
      <Route path='/palettes/:id' element={<Palette />} />
      <Route path='/palettes/:paletteId/:colorId' element={<SingleColorPalette/>} />
    </Routes>
  )
}

export default App
