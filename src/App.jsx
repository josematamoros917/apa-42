import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Categoria from './components/Categoria';
import ProductosCategoria from './components/ProductosCategoria';
import ProductoSeleccionado from './components/ProductoSeleccionado';
import { CarritoProvider } from './components/CarritoContext';
import Carrito from './components/Carrito';

function App() {
    const [productos, setProductos] = useState([]);  // Productos de la categoría seleccionada
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);  // Producto seleccionado

    const handleProductoSeleccionado = (producto) => {
        setProductoSeleccionado(producto);
    };

    return (
        <CarritoProvider>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/categoria/:id" element={
                        <Categoria 
                            setProductos={setProductos} 
                        />
                    } />
                    <Route path="/carrito" element={<Carrito />} />
                </Routes>

                {productoSeleccionado ? (
                    <ProductoSeleccionado 
                        producto={productoSeleccionado} 
                        onVolver={() => setProductoSeleccionado(null)} 
                    />
                ) : (
                    <ProductosCategoria 
                        productos={productos} 
                        onProductoSeleccionado={handleProductoSeleccionado} 
                    />
                )}
            </div>
        </CarritoProvider>
    );
}

export default App;
