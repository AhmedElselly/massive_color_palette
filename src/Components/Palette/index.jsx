import React, { Component } from 'react';
import styles from '../../styles/Palette.module.css';
import ColorBox from '../ColorBox';

const Palette = ({ colors }) => {
  const generateColorBoxes = () => colors.map((color, i) => {
    return (
      <ColorBox key={i} background={color.color} name={color.name} />
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