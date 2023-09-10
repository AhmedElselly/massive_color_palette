import React, { useState, forwardRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField, Typography } from '@mui/material';
import { useSelector } from 'react-redux';


const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmDialog = ({ open, handleConfirm, setOpen, name, handlePaletteChange }) => {
	const [error, setError] = useState(false);
	const palettes = useSelector(state => state.palettes.value);
	const [message, setMessage] = useState('');

	const handleClose = () => {
		setOpen(false);
	};

	const handleSubmit = e => {
		const newName = name.toLowerCase().replace(/ /g, '-');
		const foundPalette = palettes?.find(palette => palette.id === newName);
		if (foundPalette) {
			setMessage('Palette name already exists!');
			setError(true);
		} else {
			handleConfirm();
			setOpen(false);
		}
	}

	const handleChange = e => {
		handlePaletteChange(e.target.value);
	}

	return (
		<div>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle>{"Choose a palette name"}</DialogTitle>
				<DialogContent>
					<Typography variant='p'>Give a name for your beauteous palette. Make sure it's unique.</Typography>
					<DialogContentText id="alert-dialog-slide-description">
						<TextField
							id="standard-basic"
							label="Standard"
							variant="standard"
							onChange={handleChange}
							name='name'
							value={name}
							error={error}
							helperText={message}
							fullWidth
						/>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button variant='contained' onClick={handleSubmit}>Add palette</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default ConfirmDialog;