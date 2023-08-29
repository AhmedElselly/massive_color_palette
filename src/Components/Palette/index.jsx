import React, { Component } from 'react';
import styles from '../../styles/Palette.module.css';
import ColorBox from '../ColorBox';

class index extends Component {
  render() {
    const colorBoxes = this.props.colors.map((color, i) => {
      return (
        <ColorBox key={i} background={color.color} name={color.name} />
      )
    })
    return (
      <div className={styles.palette}>
        <div className={styles.paletteColors}>
          {colorBoxes}
        </div>
      </div>
    )
  }
}

export default index;