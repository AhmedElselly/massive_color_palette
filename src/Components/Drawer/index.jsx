import React, { Fragment, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import styles from '../../styles/Navbar.module.css';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Link } from 'react-router-dom';
import { FormControl, MenuItem, Select } from '@mui/material';

const TemporaryDrawer = ({ 
	open, 
	handleClose, 
	showLevel, 
	level, 
	handleSliderChange, 
	newLevel, 
	selected, 
	handleSelectChange
 }) => {

	return (
		<div>
			<Fragment>
				<Drawer
					anchor={'top'}
					open={open}
					onClose={handleClose}
				>
					<div className={styles.leftSmallScreen}>
						<Link to='/' className={styles.logoSmallScreen}>reactcolorpicker</Link>
						{showLevel && <div className={styles.sliderSmallScreen}>
							<span className={styles.levelText}>Level:{newLevel}</span>
							<Slider defaultValue={level} min={100} max={900} onChange={handleSliderChange} step={100} />
						</div>}
					</div>
					<div className={styles.rightSmallScreen}>
						<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
							<Select
								labelId="format-label"
								id="format"
								value={selected}
								onChange={handleSelectChange}
							>
								<MenuItem value={'hex'}>HEX - #ffffff</MenuItem>
								<MenuItem value={'rgb'}>RGB - {`rgb(255,255,255)`}</MenuItem>
								<MenuItem value={'rgba'}>RGBA - {`rgba(255,255,255,1)`}</MenuItem>
							</Select>
						</FormControl>
					</div>
				</Drawer>
			</Fragment>
		</div>
	);
}

export default TemporaryDrawer;