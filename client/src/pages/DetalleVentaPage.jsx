// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { getAllProductos } from "../api/productos.api";
// import { crearDetalleVentas } from "../api/detalleventa.api";

// export function DetalleVentaPage({ ventaId }) {
//   const { register, handleSubmit } = useForm();
//   const [productos, setProductos] = useState([]);

//   useEffect(() => {
//     const fetchProductos = async () => {
//       try {
//         const res = await getAllProductos();
//         setProductos(res.data);
//       } catch (error) {
//         console.error("Error al obtener los productos:", error);
//       }
//     };
//     fetchProductos();
//   }, []);

//   const onSubmit = async (data) => {
//     try {
//       // Agregar el ID de la venta al detalle de venta
//       const detalleVenta = { ...data, id_venta: ventaId };
//       await crearDetalleVentas(detalleVenta);
//       // Redirigir a la página de lista de ventas después de agregar el detalle
//       // Podrías redirigir a donde prefieras después de agregar un detalle de venta
//       window.location.href = "/venta";
//     } catch (error) {
//       console.error("Error al registrar el detalle de venta:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Agregar Detalle de Venta</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label htmlFor="id_producto">Producto:</label>
//           <select id="id_producto" {...register("id_producto")}>
//             {productos.map((producto) => (
//               <option key={producto.id} value={producto.id}>
//                 {producto.descripcion}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label htmlFor="cantidad">Cantidad:</label>
//           <input type="number" id="cantidad" {...register("cantidad")} />
//         </div>
//         <button type="submit">Agregar Detalle</button>
//       </form>
//     </div>
//   );
// }


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
