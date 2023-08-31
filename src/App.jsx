import { Fragment, useState } from 'react'
import Palette from './Components/Palette'
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import { Route, Routes } from 'react-router-dom';
import PaletteList from './Components/PaletteList';

function App() {

  return (
    <Routes>
      <Route path='/' element={<PaletteList seedColors={seedColors} />} />
      {/* <Route path='/palettes/:id' element={<Palette palette={generatePalette(seedColors[4])} />} /> */}
      <Route path='/palettes/:id' element={<Palette />} />
    </Routes>
  )
}

export default App
