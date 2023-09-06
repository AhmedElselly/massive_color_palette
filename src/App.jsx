import { Fragment, useEffect, useState } from 'react'
import Palette from './Components/Palette'
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import { Route, Routes, useNavigate } from 'react-router-dom';
import PaletteList from './Components/PaletteList';
import SingleColorPalette from './Components/SingleColorPalette';
import CreatePalette from './Components/CreatePalette';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPalette, loadPalettes } from './store/paletteSlice';

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const palettes = useSelector(state => state.palettes.value);
  
  useEffect(() => {
    dispatch(loadPalettes(seedColors));
  }, []);
  console.log(palettes)

  const handleSavePalette = (newPalette) => {
    dispatch(addNewPalette(newPalette));
    navigate('/');
  }
  return (
    <Routes>
      <Route path='/' element={<PaletteList seedColors={palettes} />} />
      <Route path='/palettes/create' element={<CreatePalette savePalette={handleSavePalette} />} />
      <Route path='/palettes/:id' element={<Palette />} />
      <Route path='/palettes/:paletteId/:colorId' element={<SingleColorPalette/>} />
    </Routes>
  )
}

export default App
