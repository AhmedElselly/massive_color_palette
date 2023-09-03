import React, { Component, useEffect, useState } from 'react';
import styles from '../../styles/ColorBox.module.css'
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

const ColorBox = ({ name, background, colorId, paletteId, showMore, fullHeight }) => {
	const [copied, setCopied] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setCopied(false);
		}, 1500);
	}, [copied]);

	const changeCopyState = () => {
		setCopied(true)
	}
	return (
		<CopyToClipboard text={background} onCopy={changeCopyState}>
			<div style={{ background }} className={!fullHeight ? styles.colorBox : `${styles.colorBox} ${styles.colorBoxFullHeight}`}>
				<div style={{ background }} className={`${styles.copyOverlay} ${copied && styles.show}`} />
				<div className={`${styles.copyMsg} ${copied && styles.show}`}>
					<h1 className={styles.copyText}>copied!</h1>
					<p className={styles.colorName}>{background}</p>
				</div>
				<div className={styles.copyContainer}>
					<div className={styles.boxContent}>
						<span>{name}</span>
					</div>
					<button className={styles.copyBtn}>COPY</button>
				</div>
				{showMore && <Link to={`/palettes/${paletteId}/${colorId}`} onClick={(e) => e.stopPropagation()}>
					<span className={styles.seeMore}>MORE</span>
				</Link>}
			</div>
		</CopyToClipboard>
	)

}
export default ColorBox;