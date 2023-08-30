import React, { Component, useState } from 'react';
import styles from '../../styles/Palette.module.css';
import ColorBox from '../ColorBox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);

  const handleSliderChange = val => {
    setLevel(val);
  }

  console.log(level)

  const generateColorBoxes = () => palette.colors[level].map((color, i) => {
    return (
      <ColorBox key={i} background={color.rgba} name={color.name} />
    )
  })
  return (
    <div className={styles.palette}>
      <div>
        <Slider defaultValue={level} min={100} max={900} onChange={handleSliderChange} step={100} />
      </div>
      <div className={styles.paletteColors}>
        {generateColorBoxes()}
      </div>
    </div>
  )
}

export default Palette;