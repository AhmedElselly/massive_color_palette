import React, { Component } from 'react';
import styles from '../../styles/ColorBox.module.css'

class ColorBox extends Component {
	render() {
		const {background, name} = this.props;
		return (
			<div style={{ background }} className={styles.colorBox}>
				<div className={styles.copyContainer}>
					<div className={styles.boxContent}>
						<span>{name}</span>
					</div>
					<button className={styles.copyBtn}>COPY</button>
				</div>
				<span className={styles.seeMore}>MORE</span>
			</div>
		)
	}
}
export default ColorBox;