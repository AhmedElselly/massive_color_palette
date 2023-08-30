import React, { Component, useState } from 'react';
import styles from '../../styles/Palette.module.css';
import ColorBox from '../ColorBox';
import Navbar from '../Navbar';

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);

  const handleSliderChange = val => {
    setLevel(val);
  }

  const generateColorBoxes = () => palette.colors[level].map((color, i) => {
    return (
      <ColorBox key={i} background={color.rgba} name={color.name} />
    )
  })
  return (
    <div className={styles.palette}>
      <Navbar level={level} handleChangeLevel={handleSliderChange} />
      <div className={styles.paletteColors}>
        {generateColorBoxes()}
      </div>
    </div>
  )
}

export default Palette;