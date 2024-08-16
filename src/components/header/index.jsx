import React, { useState } from 'react';
import barsIcon from '../../assets/bars.png';
import xmarkIcon from '../../assets/xmark.png';

import "../../style/style.css";
import "../../style/responsivo.css";
import "../../style/global.css";
import styles from '../../style/header.module.css';


export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className={styles.Header}>
                <div className={styles.maximoHeader}>

                    <h1>Anna</h1>
                    <ul className={`${styles.mainMenu} ${isMenuOpen ? styles.open : ''}`}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contacts</a></li>
                        <li><a href="#">Social Media</a></li>
                    </ul>

                    <button onClick={toggleMenu} className={styles.menuButton}>
                        <img src={isMenuOpen ? xmarkIcon : barsIcon} alt="Menu Icon" />
                    </button>

                </div>
            </header>

            <div className={`menuHamburguer ${isMenuOpen ? 'open' : 'closed'}`}>

                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#">Social Media</a></li>
                </ul>

            </div>
        </>
    );
};
