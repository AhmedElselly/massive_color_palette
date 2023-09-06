import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { generatePalette } from '../../colorHelpers';
import ColorBox from '../ColorBox';
import styles from '../../styles/SingleColorPalette.module.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useSelector } from 'react-redux';


const SingleColorPalette = () => {
	const { paletteId, colorId } = useParams();
	const [level, setLevel] = useState(500);
	const [format, setFormat] = useState('hex');
	const seedColors = useSelector(state => state.palettes.value);

	const findPalette = id => seedColors.find(palette => palette.id === id);
	const palette = generatePalette(findPalette(paletteId));
	const gatherShades = (palette, colorToFilterBy) => {
		let newShades = [];
		let { colors } = palette;
		for (let key in colors) {
			newShades = newShades.concat(colors[key].filter(color => color.id === colorToFilterBy));
		}
		return newShades.slice(1);
	}

	const [shades, setShades] = useState(gatherShades(palette, colorId));

	const handleSliderChange = val => {
		setLevel(val);
	}

	const handleSelectedFormat = val => {
		setFormat(val);
	}

	const displayShades = () => {
		return shades?.map((color, i) => {
			return <ColorBox key={i} fullHeight={true} background={color[format]} name={color.name} paletteId={paletteId} colorId={colorId} showMore={false} />
		})
	}

	return (
		<div className={styles.palette}>
			<Navbar showLevel={false} level={level} handleChangeLevel={handleSliderChange} handleSelectedFormat={handleSelectedFormat} />
			<h4 style={{ padding: 20 }}>Single color palette shades</h4>
			<div className={styles.paletteColors}>
				{displayShades()}
				{/* Go Back Button */}
				<div className={styles.goBack}>
					<Link to={`/palettes/${paletteId}`} className={styles.goBackBtn}>
						Go Back
					</Link>
				</div>
			</div>
			{/* Footer */}
			<Footer palette={palette} />
		</div>
	)
}

export default SingleColorPalette