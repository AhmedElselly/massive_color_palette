import React, { Component } from 'react';
import styles from '../../styles/ColorBox.module.css'

class ColorBox extends Component {
  render() {
    return (
      <div style={{background: this.props.background}} className={styles.colorBox}>
        <span>{this.props.name}</span>
        <span>MORE</span>
      </div>
    )
  }
}
export default ColorBox;