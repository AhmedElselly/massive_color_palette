import { Typography } from '@mui/material'
import React from 'react'
import Container from './Container';

const CreatePalette = ({savePalette}) => {
	return (
		<div>
			<Container savePalette={savePalette}/>
		</div>
	)
}

export default CreatePalette