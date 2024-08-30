// src/components/ProductosCategoria.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductosCategoria.module.css';

const ProductosCategoria = ({ productos, onProductoSeleccionado }) => {
    return (
        <div className={styles.productosContainer}>
            <h3 className="text-center elegant-text-bold">Selecciona un producto</h3>
            <div className={styles.productosGrid}>
                {productos.length > 0 ? (
                    productos.map((producto) => (
                        <div 
                            key={producto.id} 
                            className={styles.producto} 
                            onClick={() => onProductoSeleccionado(producto)} 
                            role="button" 
                            tabIndex={0} 
                        >
                            <img 
                                src={producto.image} 
                                alt={producto.name} 
                                className={styles.imagenProducto} 
                            />
                        </div>
                    ))
                ) : (
                    <p>No hay productos disponibles en esta categoría.</p>
                )}
            </div>
        </div>
    );
};

ProductosCategoria.propTypes = {
    productos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    onProductoSeleccionado: PropTypes.func.isRequired,
};

export default ProductosCategoria;
