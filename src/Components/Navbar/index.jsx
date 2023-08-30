import React, { useState } from 'react';
import styles from '../../styles/Navbar.module.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Navbar = ({ level, handleChangeLevel, handleSelectedFormat }) => {
	const [newLevel, setNewLevel] = useState(level);
	const [selected, setSelected] = useState('hex');
	const handleSliderChange = val => {
		setNewLevel(val)
		handleChangeLevel(val);
	}

	const handleSelectChange = e => {
		setSelected(e.target.value);
		handleSelectedFormat(e.target.value);
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
			<div className={styles.right}>
				<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
					<Select
						labelId="demo-simple-select-standard-label"
						id="demo-simple-select-standard"
						value={selected}
						onChange={handleSelectChange}
					>
						<MenuItem value={'hex'}>HEX - #ffffff</MenuItem>
						<MenuItem value={'rgb'}>RGB - {`rgb(255,255,255)`}</MenuItem>
						<MenuItem value={'rgba'}>RGBA - {`rgb(255,255,255,1)`}</MenuItem>
					</Select>
				</FormControl>
			</div>
		</div>
	)
}

export default Navbar