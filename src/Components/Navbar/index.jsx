import React, { forwardRef, useState } from 'react';
import styles from '../../styles/Navbar.module.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { FormControl, MenuItem, Select, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { Link } from 'react-router-dom';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Navbar = ({ level, handleChangeLevel, handleSelectedFormat }) => {
	const [newLevel, setNewLevel] = useState(level);
	const [selected, setSelected] = useState('hex');
	const [open, setOpen] = useState(false);

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
  };

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<Link to='/' className={styles.logo}>reactcolorpicker</Link>
				<div className={styles.slider}>
					<span className={styles.levelText}>Level:{newLevel}</span>
					<Slider defaultValue={level} min={100} max={900} onChange={handleSliderChange} step={100} />
				</div>
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
						<MenuItem value={'rgba'}>RGBA - {`rgb(255,255,255,1)`}</MenuItem>
					</Select>
				</FormControl>
			</div>
			<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Format changed
        </Alert>
      </Snackbar>
		</div>
	)
}

export default Navbar