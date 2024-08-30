// src/components/Header.js
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={`${styles.header}`}>
            <h1 className={`${styles.companyName} elegant-text-bold`}>Bienvenido a Girasol Tienda</h1>
            <div>
                <p className={`${styles.companySentence} informal-text`}>“El arte es la forma más intensa de individualismo que el mundo ha conocido.” - Oscar Wilde</p>
                <p className={`${styles.companyCalled} informal-text-light`}>Explora nuestra colección de artesanías únicas.</p>
            </div>
        </header>
    );
};

export default Header;
