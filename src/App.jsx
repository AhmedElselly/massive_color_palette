import { Fragment, useState } from 'react'
import Palette from './Components/Palette'
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import { Route, Routes } from 'react-router-dom';

function App() {
  const findPalette = id => seedColors.find(palette => palette.id === id);

  return (
    <Routes>
      <Route path='/' element={<Palette palette={generatePalette(seedColors[4])} />} />
    </Routes>
  )
}

export default App
