import React, { useState } from 'react';
import styles from '../../styles/Navbar.module.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Navbar = ({level, handleChangeLevel}) => {
	const [newLevel, setNewLevel] = useState(level);
  const handleSliderChange = val => {
		setNewLevel(val)
    handleChangeLevel(val);
  }

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<div className={styles.logo}>reactcolorpicker</div>
				<div className={styles.slider}>
					<span className={styles.levelText}>Level:{newLevel}</span>
					<Slider defaultValue={level} min={100} max={900} onChange={handleSliderChange} step={100} />
				</div>
			</div>
		</div>
	)
}

export default Navbar