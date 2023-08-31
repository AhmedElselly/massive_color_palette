import React, { useEffect, useState } from 'react';
import styles from '../../styles/Palette.module.css';
import ColorBox from '../ColorBox';
import Navbar from '../Navbar';
import { useParams } from 'react-router-dom';
import { generatePalette } from '../../colorHelpers';
import seedColors from '../../seedColors';

const Palette = () => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');
  const { id } = useParams();
  
  const findPalette = id => seedColors.find(palette => palette.id === id);
  const palette = generatePalette(findPalette(id)); 

  const handleSliderChange = val => {
    setLevel(val);
  }

  const handleSelectedFormat = val => {
    setFormat(val);
  }

  const generateColorBoxes = () => palette?.colors[level]?.map((color, i) => {
    return (
      <ColorBox key={i} background={color[format]} name={color.name} />
    )
  })
  return (
    <div className={styles.palette}>
      <Navbar level={level} handleChangeLevel={handleSliderChange} handleSelectedFormat={handleSelectedFormat} />
      <div className={styles.paletteColors}>
        {generateColorBoxes()}
      </div>
      {/* FOOTER */}
      <div className={styles.footerContainer}>
        <div className={styles.footerWrapper}>
          <span className={styles.paletteName}>{palette.paletteName}</span>
          <span className={styles.emoji}>{palette.emoji}</span>
        </div>
      </div>
    </div>
  )
}

export default Palette;