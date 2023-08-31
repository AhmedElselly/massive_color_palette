import React from 'react';
import { Link } from 'react-router-dom';

const PaletteList = ({seedColors}) => {
	const displayPalettes = () => {
		return seedColors?.map(color => {
			return <Link to={`/palettes/${color.id}`} key={color.id}>{color.paletteName}</Link>
		})
	}
  return (
    <div>
			{displayPalettes()}
    </div>
  )
}

export default PaletteList