// frontend\src\components\Navbar.jsx
import React, { useContext ,useState } from 'react';
import { LuMenu } from 'react-icons/lu'; // Asegúrate de que estás importando el icono correctamente
import { CarritoContext } from './CarritoContext';
import styles from './Navbar.module.css';

const Navbar = () => {
    const { carrito } = useContext(CarritoContext); // Obtener el carrito
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(prevState => !prevState);
    };

    return (
        <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
            <div className="container-fluid">
                <a className={`navbar-brand elegant-text-bold ${styles.navbarBrand}`} href="/">Girasol Tienda</a>
                <button 
                    className={`navbar-toggler ${styles.customToggler}`} // Usa la clase personalizada
                    type="button" 
                    onClick={handleToggle} 
                    aria-controls="navbarNav" 
                    aria-expanded={isExpanded} 
                    aria-label="Toggle navigation"
                >
                    <LuMenu color={isExpanded ? 'your-selected-color' : 'default-color'} />
                </button>
                <div 
                    className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`} 
                    id="navbarNav"
                >
                    <ul className={`navbar-nav ms-auto ${styles.navbarNav}`}>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.customNavLink} elegant-text-bold`} aria-current="page" href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.customNavLink} elegant-text-bold`} href="/productos">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.customNavLink} elegant-text-bold`} href="/carrito">
                                Carrito {carrito.length > 0 && <span className={styles.badge}>{carrito.length}</span>}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.customNavLink} elegant-text-bold`} href="/contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
