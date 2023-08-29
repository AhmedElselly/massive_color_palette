import { Fragment, useState } from 'react'
import Palette from './Components/Palette'
import seedColors from './seedColors';

function App() {
  return (
    <Fragment>
      <Palette {...seedColors[4]} />
    </Fragment>
  )
}

export default App
