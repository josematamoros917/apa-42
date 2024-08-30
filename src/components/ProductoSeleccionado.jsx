// src/components/ProductoSeleccionado.jsx
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductoSeleccionado.module.css';
import { GrCart } from "react-icons/gr";
import { GrAddCircle } from "react-icons/gr";
import { SlActionUndo } from "react-icons/sl";
import { CarritoContext } from './CarritoContext';

const ProductoSeleccionado = ({ producto, onVolver }) => {
    const { agregarAlCarrito } = useContext(CarritoContext);

    return (
        <div className={`${styles.container}`}>
            <div className={styles.sliderContainer}>
                <div className={styles.slider}>
                    <img 
                        src={producto.image} 
                        alt={producto.name} 
                        className={`${styles.imagenGrande} img-fluid`} 
                    />
                    {producto.images.map((img, index) => (
                        <img 
                            key={index} 
                            src={img.image}  
                            alt={`Imagen ${index + 1} de ${producto.name}`} 
                            className={`${styles.imagenGrande} img-fluid`} 
                        />
                    ))}
                </div>
            </div>
            <div className={`${styles.infoContainer} elegant-text`}>
                <h2 className={`${styles.productoNombre} elegant-text-bold`}>{producto.name}</h2>
                <p>{producto.description}</p>
                <div className={`${styles.botonera}`}>
                    <p className={`${styles.precio} informal-text-bold`}>${producto.price} CLP</p>
                    <button className={`${styles.boton}`} onClick={() => agregarAlCarrito(producto)}>
                        <GrAddCircle />
                        <GrCart />
                    </button>
                    <button className={`${styles.boton}`} onClick={onVolver}>
                        <SlActionUndo />
                    </button>
                </div>
            </div>
        </div>
    );
};

ProductoSeleccionado.propTypes = {
    producto: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(
            PropTypes.shape({
                image: PropTypes.string.isRequired
            })
        ).isRequired,
    }).isRequired,
    onVolver: PropTypes.func.isRequired,
};

export default ProductoSeleccionado;
