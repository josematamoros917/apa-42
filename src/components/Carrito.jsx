// src/components/Carrito.jsx
import React, { useContext } from 'react';
import { CarritoContext } from './CarritoContext';
import styles from './Carrito.module.css'; // Asegúrate de tener estilos para tu carrito

const Carrito = () => {
    const { carrito } = useContext(CarritoContext);

    const total = carrito.reduce((acc, producto) => acc + producto.price, 0); // Sumar precios

    return (
        <div className={styles.carritoContainer}>
            <h2>Carrito</h2>
            {carrito.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <div>
                    <ul>
                        {carrito.map((producto, index) => (
                            <li key={index} className={styles.productoItem}>
                                <img src={producto.image} alt={producto.name} className={styles.productoImagen} />
                                <div>
                                    <h3>{producto.name}</h3>
                                    <p>{producto.description}</p>
                                    <p>Precio: ${producto.price} CLP</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${total} CLP</h3>
                </div>
            )}
        </div>
    );
};

export default Carrito;
