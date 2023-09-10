import { Fragment, useEffect } from 'react'
import Palette from './Components/Palette'
import seedColors from './seedColors';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import PaletteList from './Components/PaletteList';
import SingleColorPalette from './Components/SingleColorPalette';
import CreatePalette from './Components/CreatePalette';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPalette, loadPalettes } from './store/paletteSlice';
import Container from './Components/Container';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation()
  const dispatch = useDispatch();
  const colors = JSON.parse(localStorage.getItem('data'));

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
