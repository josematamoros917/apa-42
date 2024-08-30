// src/context/CarritoContext.js
import React, { createContext, useState } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [productos, setProductos] = useState([]); // Estado para almacenar los productos

    const agregarAlCarrito = (producto) => {
        setCarrito((prevCarrito) => [...prevCarrito, producto]);
    };

    return (
        <CarritoContext.Provider value={{ carrito, agregarAlCarrito, productos, setProductos }}>
            {children}
        </CarritoContext.Provider>
    );
};
