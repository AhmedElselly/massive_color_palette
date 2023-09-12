import { Alert, Snackbar } from '@mui/material';
import React, { useState } from 'react'

const AlertDialog = ({ open, handleClose, type, message }) => {
	const [state, setState] = useState({
		vertical: 'top',
		horizontal: 'center',
	});
	const { vertical, horizontal } = state;
	return (
		<Snackbar
			open={open}
			anchorOrigin={{ vertical, horizontal }}
			autoHideDuration={6000}
			onClose={handleClose}
			key={vertical + horizontal}
		>
			<Alert onClose={handleClose} severity={type} sx={{ width: '100%', mt: 5 }}>
				{message}
			</Alert>
		</Snackbar>
	)
}

export default AlertDialog;