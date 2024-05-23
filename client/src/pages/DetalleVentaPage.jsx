import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { crearDetalleVentas } from '../api/detalleventa.api';

export function DetalleVentaPage() {
  const location = useLocation();
  const [productosDisponibles, setProductosDisponibles] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const { state } = location;
    if (state && state.productos) {
      setProductosDisponibles(state.productos);
    }
  }, [location]);

  const handleAgregarProducto = async () => {
    if (!selectedProduct) {
      console.error('Debe seleccionar un producto.');
      return;
    }

    // Crea el detalle de venta para el producto seleccionado
    const nuevoDetalleVenta = {
      id_producto: selectedProduct.id,
      cantidad: 1, // Por ejemplo, aquí puedes poner la cantidad seleccionada
      precio_unitario: selectedProduct.precio_unitario
    };

    try {
      await crearDetalleVentas(nuevoDetalleVenta);
      console.log('Detalle de venta creado correctamente.');
    } catch (error) {
      console.error('Error al crear el detalle de venta:', error);
    }
  };

  return (
    <div>
      <h2>Agregar Detalle de Venta</h2>
      <select onChange={(e) => setSelectedProduct(e.target.value)}>
        <option value="">Seleccionar producto</option>
        {productosDisponibles.map((producto) => (
          <option key={producto.id} value={producto}>
            {producto.descripcion} - ${producto.precio_unitario}
          </option>
        ))}
      </select>
      <button onClick={handleAgregarProducto}>Agregar Producto</button>
    </div>
  );
}
