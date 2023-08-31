import React from 'react';
import styles from '../../styles/MiniPalette.module.css';

const MiniPalette = ({paletteName, emoji, colors}) => {
	const displayColors = () => {
		return colors?.map((color, i) => {
			return <div key={i} className={styles.miniColor} style={{backgroundColor: color.color}}></div>
		})
	}
	return (
		<div className={styles.root}>
			<div className={styles.colors}>
				{displayColors()}
			</div>
			<div className={styles.title}>{paletteName} <span>{emoji}</span></div>
		</div>
	)
}

export default MiniPalette;