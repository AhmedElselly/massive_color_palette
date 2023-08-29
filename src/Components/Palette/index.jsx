import React, { Component } from 'react';
import styles from '../../styles/Palette.module.css';

class index extends Component {
  render() {
    return (
      <div className={styles.palette}>
        <div className={styles.paletteColors}></div>
      </div>
    )
  }
}

export default index;