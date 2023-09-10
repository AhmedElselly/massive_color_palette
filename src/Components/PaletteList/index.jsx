import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from '../MiniPalette';
import styles from '../../styles/PaletteList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadPalettes } from '../../store/paletteSlice';
import seedColors from '../../seedColors';

const PaletteList = () => {
	const palettes = useSelector(state => state.palettes.value);

	const displayPalettes = () => {
		return palettes?.map(palette => {
			return (
				<Link key={palette.id} to={`/palettes/${palette.id}`} onClick={e => e.stopPropagation()}>
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
					<Link
						to='/palettes/create'
						className='lightText'
						style={{
							textTransform: 'capitalize',
							textDecoration: 'underline'
						}}>create palette</Link>
				</nav>
				<div className={styles.palettes}>
					<div className={styles.palettesWrapper}>
						{displayPalettes()}
					</div>
				</div>
			</div>
		</div>
	)
}

export default PaletteList