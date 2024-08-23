// src/components/Navbar.js
import React from 'react';
import styles from './Navbar.module.css'; // Importar el módulo CSS

const Navbar = () => {
    return (
        <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
            <div className="container-fluid">
                <a className={`elegant-text-bold ${styles.navbarBrand}`} href="/">Sunflower Store</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className={`${styles.customNavLink} active elegant-text-bold`} aria-current="page" href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className={`${styles.customNavLink} elegant-text-bold`} href="/productos">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className={`${styles.customNavLink} elegant-text-bold`} href="/carrito">Carrito</a>
                        </li>
                        <li className="nav-item">
                            <a className={`${styles.customNavLink} elegant-text-bold`} href="/contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
