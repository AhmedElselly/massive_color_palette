import React, { useEffect, useRef, useState } from 'react'
import styles from '../../styles/DraggableColorBox.module.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const DraggableColorBox = ({ color, name, id, handleRemove }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    background: color
  };

  const handleRemoveColor = (e) => {
    console.log(e)
    e.stopPropagation();
    console.log(name)
    handleRemove(name)
  }

  return (
    <div ref={setNodeRef} style={style} className={styles.root} {...attributes} {...listeners}>
      <div className={styles.wrapper}>
        <div>{name}</div>
        <DeleteIcon onClick={(e) => handleRemoveColor(e)} className={styles.icon} />
      </div>
    </div>
  )
}

export default DraggableColorBox