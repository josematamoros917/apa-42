import React, { useState } from 'react';
import Header from './Header';
import Menu from './Menu';
import styles from './Home.module.css';
import Catalogo from './Catalogo';
import SocialMediaIcons from './SocialMediaIcons'; // Asegúrate de importar los iconos

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Header />
            <div className={`${styles.mainContainer}`}>
                <SocialMediaIcons />
                <Catalogo onClick={handleMenuToggle} /> {/* Botón del logo en la vista principal */}
                <Menu isOpen={isOpen} onClose={handleMenuToggle} />
            </div>
            
        </div>
    );
};

export default Home;
