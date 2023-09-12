import React, { forwardRef, useState } from 'react';
import styles from '../../styles/Navbar.module.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { FormControl, MenuItem, Select, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { Link, useNavigate } from 'react-router-dom';
import AlertDialog from '../AlertDialog';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import TemporaryDrawer from '../Drawer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Navbar = ({ level, handleChangeLevel, handleSelectedFormat, showLevel }) => {
	const navigate = useNavigate()
	const [newLevel, setNewLevel] = useState(level);
	const [selected, setSelected] = useState('hex');
	const [open, setOpen] = useState(false);
	const [drawerOpen, setDrawerOpen] = useState(false);

	const handleSliderChange = val => {
		setNewLevel(val)
		handleChangeLevel(val);
	}

	const handleSelectChange = e => {
		setSelected(e.target.value);
		handleSelectedFormat(e.target.value);
		setOpen(true)
	}

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
		setDrawerOpen(false);
	};

	const handleDrawerOpen = e => {
		setDrawerOpen(true)
	}

	return (
		<div className={styles.container}>
			<div className={styles.humburger} onClick={handleDrawerOpen}>
				<MenuOpenIcon sx={{ fontSize: 32 }} />
			</div>
			<div className={styles.left}>
				<Link to='/' className={styles.logo}>reactcolorpicker</Link>
				{showLevel && <div className={styles.slider}>
					<span className={styles.levelText}>Level:{newLevel}</span>
					<Slider defaultValue={level} min={100} max={900} onChange={handleSliderChange} step={100} />
				</div>}
			</div>
			<div className={styles.right}>
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
			<div className={styles.backButton} onClick={() => navigate(-1)}>
				<ArrowBackIcon />
			</div>
			<AlertDialog
				open={open}
				handleClose={handleClose}
				message='Format changed'
				type='success'
			/>
			<div className={styles.drawerContainer}>
				<TemporaryDrawer
					open={drawerOpen}
					selected={selected}
					handleClose={handleClose}
					level={level}
					showLevel={showLevel}
					newLevel={newLevel}
					handleSliderChange={handleSliderChange}
					handleSelectChange={handleSelectChange}
				/>
			</div>
		</div>
	)
}

export default Navbar