import { Fragment, useEffect } from 'react'
import Palette from './Components/Palette'
import { Route, Routes, useLocation } from 'react-router-dom';
import PaletteList from './Components/PaletteList';
import SingleColorPalette from './Components/SingleColorPalette';
import CreatePalette from './Components/CreatePalette';
import { useDispatch } from 'react-redux';
import { loadPalettes } from './store/paletteSlice';
import Container from './Components/Container';
import seedColors from './seedColors';

function App() {
  const location = useLocation()
  const dispatch = useDispatch();
  const data = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : seedColors;
  const colors = data;

  useEffect(() => {
    dispatch(loadPalettes(colors));
  }, []);

  return (
    <Fragment>
      <Container>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<PaletteList />} />
          <Route path='/palettes/create' element={<CreatePalette />} />
          <Route path='/palettes/:id' element={<Palette />} />
          <Route path='/palettes/:paletteId/:colorId' element={<SingleColorPalette />} />
        </Routes>
      </Container>
    </Fragment>
  )
}

export default App
