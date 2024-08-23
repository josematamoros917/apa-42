import React from 'react';
import styles from './SocialMediaIcons.module.css';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const SocialMediaIcons = () => {
    return (
        <div className={`${styles.socialMedia}`}>
            <a href="https://www.instagram.com" className={`${styles.icon}`} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            <a href="https://www.whatsapp.com" className={`${styles.icon}`} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
            </a>
        </div>
    );
};

export default SocialMediaIcons;
