import React from 'react'
import styles from '../../styles/Footer.module.css';

const Footer = ({palette}) => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerWrapper}>
                <span className={styles.paletteName}>{palette.paletteName}</span>
                <span className={styles.emoji}>{palette.emoji}</span>
            </div>
        </div>
    )
}

export default Footer