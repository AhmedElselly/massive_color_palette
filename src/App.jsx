import { Fragment, useState } from 'react'
import Palette from './Components/Palette'
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

function App() {
  return (
    <Fragment>
      <Palette palette={generatePalette(seedColors[4])} />
    </Fragment>
  )
}

export default App
