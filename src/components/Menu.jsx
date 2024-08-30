// src/components/Menu.js
import React, { useEffect, useState } from 'react';
import styles from './Menu.module.css';
import SocialMediaIcons from './SocialMediaIcons';
import Catalogo from './Catalogo';
import axios from '../api/axios'; // Asegúrate de que esta ruta sea correcta

const Menu = ({ isOpen, onClose }) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('categories/');  // realiza llamado a la API
                setCategories(response.data); //seteando las categorias
            } catch (err) {
                setError('Error al cargar las categorías');
            } finally {
                setLoading(false);
            }
        };

        if (isOpen) {
            fetchCategories();
        }
    }, [isOpen]);

    return (
        <div className={`${styles.overlay} ${isOpen ? styles.flex:''}`}>
            <div className={`${styles.modalContent}`}>
            <h2 className='elegant-text-bold text-center'>Categorías</h2>
                <div className={`${styles.categoryList}`}>
                    {loading ? (
                        <p>Cargando categorías...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        <ul>
                            {categories.map((category) => (
                                <li key={category.id} className="elegant-text-bold">
                                    <a href={`/categoria/${category.id}`}>{category.name}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className={`${styles.header}`}>
                    <div className={`${styles.socialContainer}`}>
                        <SocialMediaIcons /> {/* Iconos de redes sociales a la izquierda */}
                    </div>
                    <div className={`${styles.catalogoContainer}`} onClick={onClose}>
                        <Catalogo /> {/* Logo del menú a la derecha, que cierra el modal */}
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Menu;
