import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getAllProductos } from "../api/productos.api";
import { crearDetalleVentas } from "../api/detalleventa.api";

export function DetalleVentaPage({ ventaId }) {
  const { register, handleSubmit } = useForm();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const res = await getAllProductos();
        setProductos(res.data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };
    fetchProductos();
  }, []);

  const onSubmit = async (data) => {
    try {
      // Agregar el ID de la venta al detalle de venta
      const detalleVenta = { ...data, id_venta: ventaId };
      await crearDetalleVentas(detalleVenta);
      // Redirigir a la página de lista de ventas después de agregar el detalle
      // Podrías redirigir a donde prefieras después de agregar un detalle de venta
      window.location.href = "/venta";
    } catch (error) {
      console.error("Error al registrar el detalle de venta:", error);
    }
  };

  return (
    <div>
      <h2>Agregar Detalle de Venta</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="id_producto">Producto:</label>
          <select id="id_producto" {...register("id_producto")}>
            {productos.map((producto) => (
              <option key={producto.id} value={producto.id}>
                {producto.descripcion}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cantidad">Cantidad:</label>
          <input type="number" id="cantidad" {...register("cantidad")} />
        </div>
        <button type="submit">Agregar Detalle</button>
      </form>
    </div>
  );
}