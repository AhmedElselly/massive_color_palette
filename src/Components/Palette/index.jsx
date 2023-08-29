import React, { Component } from 'react';
import styles from '../../styles/Palette.module.css';
import ColorBox from '../ColorBox';

const Palette = ({ palette }) => {
  console.log(palette)
  const generateColorBoxes = () => palette.colors[500].map((color, i) => {
    return (
      <ColorBox key={i} background={color.rgba} name={color.name} />
    )
  })
  return (
    <div className={styles.palette}>
      <div className={styles.paletteColors}>
        {generateColorBoxes()}
      </div>
    </div>
  )
}

export default Palette;