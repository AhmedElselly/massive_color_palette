import { Fragment, useState } from 'react'
import Palette from './Components/Palette'
import seedColors from './seedColors';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <Palette {...seedColors[4]} />
    </Fragment>
  )
}

export default App
