import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ChromePicker } from 'react-color';
import { Button, TextField } from '@mui/material';
import styles from '../../styles/CreatePaletteContainer.module.css'
import DraggableColorBox from '../DraggableColorBox';
import { Link } from 'react-router-dom';
import ConfirmDialog from '../ConfirmDialog';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import {
	DndContext, MouseSensor, PointerSensor, useSensor, useSensors,
} from '@dnd-kit/core';
import {
	arrayMove,
	SortableContext,
} from '@dnd-kit/sortable';
import { useSelector } from 'react-redux';


const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		flexGrow: 1,
		height: 'calc(100vh - 64px)',
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	}),
);

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}));

const Container = ({ savePalette }) => {
	const palettes = useSelector(state => state.palettes.value);
	const theme = useTheme();
	const [open, setOpen] = useState(true);
	const [activeId, setActiveId] = useState('');
	const [openDialog, setOpenDialog] = useState(false);
	const [color, setColor] = useState('#3D3D93');
	const [colors, setColors] = useState([]);
	const [error, setError] = useState(false);
	const [addedNew, setAddedNew] = useState(false);
	const [name, setName] = useState('');
	const [paletteName, setPaletteName] = useState('');
	const [message, setMessage] = useState('');

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleColorChange = newColor => {
		setColor(newColor.hex);
	}

	const mouseSensor = useSensor(PointerSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      delay: 1000,
			tolerance: 5,
    },
  });

	const addNewColor = (e) => {
		e.preventDefault()
		const foundColor = colors.find(item => item.name === name);
		if (foundColor) {
			setMessage('name should be unique')
			setError(true);
			return;
		} else {
			const newColor = {
				color,
				name,
				id: name.toLowerCase().replace(/ /g, '-')
			}
			setColors([...colors, newColor]);
			setError(false);
			setName('')
			setAddedNew(true);
		}
	}

	const handleNameChange = e => {
		setName(e.target.value);
	}

	const handlePaletteNameChange = val => {
		setPaletteName(val);
	}

	const handleSavePalette = () => {
		const newPalette = {
			paletteName: paletteName,
			id: paletteName.toLowerCase().replace(/ /g, '-'),
			colors
		}
		savePalette(newPalette)
	}

	const handleOpenDialog = () => {
		setOpenDialog(true);
	}
	const handleConfirmName = () => {
		setOpenDialog(false);
		handleSavePalette();
	}

	const handleClearColors = () => {
		setColors([]);
	}

	const sensors = useSensors(
		useSensor(PointerSensor, {
			// Require the mouse to move by 10 pixels before activating
			activationConstraint: {
				delay: 100,
			},
		}))

	const handleColorRemove = (name) => {
		console.log(name)
		const newArr = colors.filter(color => color.name !== name);

		setColors(newArr)
	}
	const handleDragStart = event => {
		const { active } = event;
		setActiveId(active.id);
	}

	const handleDragEnd = (e) => {
		const { active, over } = e;
		// console.log(e)
		if (active !== null && over !== null && active.id !== over.id) {
			setColors((items) => {
				const oldIndex = findIndexOf(items, active.id);
				const newIndex = findIndexOf(items, over.id);
				return arrayMove(items, oldIndex, newIndex);
			});
		}
	}

	const findIndexOf = (items, name) => {
		let index;
		for (let i = 0; i < items.length; i++) {
			if (items[i].id === name) {
				index = i;
				return index;
			}
		}
	}

	const handleRandomColors = () => {
		const allColors = palettes.map(p => p.colors).flat();
		const randIdx = Math.floor(Math.random() * allColors.length - 1);
		const newColor = allColors[randIdx] = {
			id: allColors[randIdx].name.toLowerCase().replace(/ /g, '-'),
			name: allColors[randIdx].name,
			color: allColors[randIdx].color
		};
		setColors([...colors, newColor]);
	}

	const displayColors = () => colors?.map((color, i) => <DraggableColorBox key={i} id={i} {...color} handleRemove={handleColorRemove} />)

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar position="fixed" color='default' open={open}>
				<Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{ mr: 2, ...(open && { display: 'none' }) }}
					>
						<LibraryAddIcon />
					</IconButton>
					<Typography variant="h6" noWrap component={Link} to='/'>
						reactmassivecolor
					</Typography>
					{colors.length ? <Button onClick={handleOpenDialog} variant='contained' sx={{ background: '#3d3d93' }}>save palette</Button> : null}
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<div className={styles.drawerWrapper}>
					<Typography variant='h5' sx={{ mt: 2 }}>Design your palette</Typography>
					<div className={styles.btnGroup}>
						<Button variant='contained' onClick={handleClearColors} sx={{ background: '#f50057' }}>clear palette</Button>
						<Button variant='contained' onClick={handleRandomColors} sx={{ background: '#673ab7' }}>random color</Button>
					</div>
					<ChromePicker color={color} onChange={val => setColor(val)} onChangeComplete={handleColorChange} />
					<form
						onSubmit={addNewColor}
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							gap: 30,
							width: '70%'
						}}
					>
						<TextField
							required
							error={error}
							id="standard-error-helper-text"
							label="Add a Name"
							value={name}
							helperText={error && message}
							variant="standard"
							onChange={handleNameChange}
						/>
						<Button type='submit' variant='contained' sx={{ background: color, width: '100%', marginInline: 20 }}>add color</Button>
					</form>
				</div>
			</Drawer>
			<Main open={open} className={styles.content}>
				<DrawerHeader />
				<DndContext autoScroll={false} sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
					<SortableContext items={colors}>
						{displayColors()}
					</SortableContext>
				</DndContext>
			</Main>
			<ConfirmDialog open={openDialog} handleConfirm={handleConfirmName} setOpen={setOpenDialog} name={paletteName} handlePaletteChange={handlePaletteNameChange} />
		</Box>
	);
}

export default Container;