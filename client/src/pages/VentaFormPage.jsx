import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { crearVenta } from "../api/venta.api";
import { getAllProductos } from "../api/productos.api";
import { crearDetalleVenta } from "../api/detalleventa.api";

export function RegistroVentaPage() {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const [productos, setProductos] = useState([]);
  const [detalleVenta, setDetalleVenta] = useState([]);
  const [totalVenta, setTotalVenta] = useState(0);

  useEffect(() => {
    async function fetchProductos() {
      try {
        const res = await getAllProductos();
        setProductos(res.data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    }
    fetchProductos();
  }, []);

  const onSubmitVenta = handleSubmit(async (data) => {
    try {
      const resVenta = await crearVenta(data);
      const idVenta = resVenta.data.id;

      // Crear detalle de venta para cada producto en la lista
      await Promise.all(
        detalleVenta.map(async (detalle) => {
          await crearDetalleVenta({
            id_venta: idVenta,
            id_producto: detalle.id,
            cantidad: detalle.cantidad,
            precio_unitario: detalle.precio_unitario,
            descuento: detalle.descuento,
            subtotal: detalle.subtotal
          });
        })
      );

      console.log("Venta registrada exitosamente");
    } catch (error) {
      console.error("Error al registrar la venta:", error);
    }
  });

  const agregarProducto = (producto) => {
    // Calcular precio unitario
    const precioUnitario = producto.valor_bulto / producto.unidades_bulto;

    // Añadir producto al detalle de venta
    setDetalleVenta([
      ...detalleVenta,
      {
        id: producto.id,
        cantidad: 1,
        precio_unitario: precioUnitario,
        descuento: 0,
        subtotal: precioUnitario
      }
    ]);

    // Calcular el total de la venta
    const nuevoTotal = totalVenta + precioUnitario;
    setTotalVenta(nuevoTotal);
  };

  return (
    <div>
      <form onSubmit={onSubmitVenta}>
        <label>Forma de Pago:</label>
        <input type="text" {...register("forma_pago", { required: true })} />
        {errors.forma_pago && <span>Este campo es requerido</span>}

        <button type="submit">Registrar Venta</button>
      </form>

      <div>
        <h2>Productos Disponibles</h2>
        <ul>
          {productos.map((producto) => (
            <li key={producto.id}>
              {producto.descripcion} - ${producto.valor_bulto}
              <button onClick={() => agregarProducto(producto)}>Agregar</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Detalle de Venta</h2>
        <ul>
          {detalleVenta.map((detalle) => (
            <li key={detalle.id}>
              {detalle.cantidad} x {detalle.precio_unitario} = ${detalle.subtotal}
            </li>
          ))}
        </ul>
        <p>Total Venta: ${totalVenta}</p>
      </div>
    </div>
  );
}
