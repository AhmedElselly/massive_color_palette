import React from 'react'
import styles from '../../styles/DraggableColorBox.module.css';

const DraggableColorBox = ({color}) => {
  return (
    <div style={{background: color}} className={styles.root}>
      {color}
    </div>
  )
}

export default DraggableColorBox