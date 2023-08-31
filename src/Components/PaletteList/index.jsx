import React from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from '../MiniPalette';
import styles from '../../styles/PaletteList.module.css';

const PaletteList = ({ seedColors }) => {
	const displayPalettes = () => {
		return seedColors?.map(palette => {
			return <MiniPalette key={palette.id} {...palette} />
		})
	}
	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<nav className={styles.nav}>
					<h1>React Colors</h1>
					<Link to='/create'>create</Link>
				</nav>
				<div className={styles.palettes}>
					{displayPalettes()}
				</div>
			</div>
		</div>
	)
}

export default PaletteList