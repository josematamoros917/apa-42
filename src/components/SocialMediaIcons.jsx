import React from 'react';
import styles from './SocialMediaIcons.module.css';

import instagramIcon from './img/ig-Photoroom.png';
import whatsappIcon from './img/wh-Photoroom.png';
// import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
// <FaInstagram />
// <FaWhatsapp />

const SocialMediaIcons = () => {
    return (
        <div className={`${styles.socialMedia}`}>
            <a href="https://wa.me/56956386335?text=¡Hola!%20Soy%20Dani,%20la%20encargada%20de%20la%20tienda.%20¿En%20qué%20puedo%20asistirte%20hoy?
" className={`${styles.icon}`} target="_blank" rel="noopener noreferrer">
                <img src={whatsappIcon}  alt="Whatsapp" />
            </a>
            <a href="https://www.instagram.com/girasol_tienda42/" className={`${styles.icon}`} target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
            </a>
            
        </div>
    );
};

export default SocialMediaIcons;
