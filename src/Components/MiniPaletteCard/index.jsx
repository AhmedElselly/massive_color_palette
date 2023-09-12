import React from 'react';
import styles from '../../styles/MiniPalette.module.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { removePalette } from '../../store/paletteSlice';

const MiniPaletteCard = ({paletteName, emoji, colors, id}) => {
	const palettes = useSelector(state => state.palettes.value);
	const dispatch = useDispatch();
	const displayColors = () => {
		return colors?.map((color, i) => {
			return <div key={i} className={styles.miniColor} style={{backgroundColor: color.color}}></div>
		})
	}

	const handleRemove = e => {
		e.preventDefault();
		const newArr = palettes.filter(p => p.id !== id);
		dispatch(removePalette(newArr))
	}

	return (
		<div className={styles.root}>
			<div className={styles.iconContainer} onClick={e => handleRemove(e)}>
				<DeleteIcon/>
			</div>
			<div className={styles.colors}>
				{displayColors()}
			</div>
			<div className={styles.title}>{paletteName}<span>{emoji}</span></div>
		</div>
	)
}

export default MiniPaletteCard;