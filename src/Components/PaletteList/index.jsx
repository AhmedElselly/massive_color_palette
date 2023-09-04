import React from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from '../MiniPalette';
import styles from '../../styles/PaletteList.module.css';

const PaletteList = ({ seedColors }) => {
	const displayPalettes = () => {
		return seedColors?.map(palette => {
			return (
				<Link key={palette.id} to={`/palettes/${palette.id}`}>
					<MiniPalette {...palette} />
				</Link>
			)
		})
	}
	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<nav className={styles.nav}>
					<h1>React Colors</h1>
					<Link to='/palettes/create' className='lightText' style={{textTransform: 'capitalize', textDecoration: 'underline'}}>create palette</Link>
				</nav>
				<div className={styles.palettes}>
					{displayPalettes()}
				</div>
			</div>
		</div>
	)
}

export default PaletteList