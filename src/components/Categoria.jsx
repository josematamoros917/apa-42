import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importar useNavigate
import SocialMediaIcons from './SocialMediaIcons'; 
import Catalogo from './Catalogo'; 
import Menu from './Menu'; 
import ProductoSeleccionado from './ProductoSeleccionado';
import ProductosCategoria from './ProductosCategoria';
import axios from '../api/axios'; 

const Categoria = () => {
    const navigate = useNavigate(); // Inicializar useNavigate
    const [isOpen, setIsOpen] = useState(false);
    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    const { id } = useParams();
    const [productos, setProductos] = useState([]);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await axios.get(`products/?categoria=${id}`);
                setProductos(response.data);

                if (response.data.length > 0) {
                    setProductoSeleccionado(response.data[0]);
                }
            } catch (error) {
                console.error('Error al obtener los productos:', error);
            }
        };

        fetchProductos();
    }, [id]);

    const seleccionarProducto = (producto) => {
        setProductoSeleccionado(producto);
    };

    const handleVolver = () => {
        navigate(-1); // Regresar a la página anterior
    };

    return (
        <div>
            {productoSeleccionado && (
                <ProductoSeleccionado 
                    producto={productoSeleccionado} 
                    onVolver={handleVolver} // Ahora pasa la función de volver
                />
            )}
            <ProductosCategoria 
                productos={productos} 
                onProductoSeleccionado={seleccionarProducto} 
            />
            <SocialMediaIcons />
            <Catalogo onClick={handleMenuToggle} />
            <Menu isOpen={isOpen} onClose={handleMenuToggle} />
        </div>        
    );
};

export default Categoria;
