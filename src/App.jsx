import { useEffect } from 'react'
import Palette from './Components/Palette'
import seedColors from './seedColors';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import PaletteList from './Components/PaletteList';
import SingleColorPalette from './Components/SingleColorPalette';
import CreatePalette from './Components/CreatePalette';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPalette, loadPalettes } from './store/paletteSlice';

function App() {
  const dispatch = useDispatch();
  const colors = JSON.parse(localStorage.getItem('data'));
  
  useEffect(() => {
    dispatch(loadPalettes(colors));
  }, []);

  return (
    <Routes>
      <Route path='/' element={<PaletteList />} />
      <Route path='/palettes/create' element={<CreatePalette />} />
      <Route path='/palettes/:id' element={<Palette />} />
      <Route path='/palettes/:paletteId/:colorId' element={<SingleColorPalette />} />
    </Routes>
  )
}

export default App
