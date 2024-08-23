import React from 'react';
import styles from './Catalogo.module.css';

const Catalogo = ({ onClick }) => {
    return (
        <div className={`${styles.catalogo}`} onClick={onClick}>
            <img src={require('./img/logo.png')} alt="Catálogo" className={`${styles.catalogoImage}`} />
        </div>
    );
};

export default Catalogo;
