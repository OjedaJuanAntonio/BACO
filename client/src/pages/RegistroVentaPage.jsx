// // import React, { useEffect, useState } from "react";
// // import { useForm } from "react-hook-form";
// // import { crearVentas } from "../api/venta.api";
// // import { getAllProductos } from "../api/productos.api";
// // import { crearDetalleVentas } from "../api/detalleventa.api";

// // export function RegistroVentaPage() {
// //   const { register, handleSubmit, formState: { errors } } = useForm();
// //   const [productos, setProductos] = useState([]);
// //   const [detalleVenta, setDetalleVenta] = useState([]);
// //   const [totalVenta, setTotalVenta] = useState(0);

// //   useEffect(() => {
// //     async function fetchProductos() {
// //       try {
// //         const res = await getAllProductos();
// //         setProductos(res.data);
// //       } catch (error) {
// //         console.error("Error al obtener los productos:", error);
// //       }
// //     }
// //     fetchProductos();
// //   }, []);

// //   const onSubmitVenta = handleSubmit(async (data) => {
// //     try {
// //       const resVenta = await crearVentas(data);
// //       const idVenta = resVenta.data.id;

// //       Crear detalle de venta para cada producto en la lista
// //       await Promise.all(
// //         detalleVenta.map(async (detalle) => {
// //           await crearDetalleVentas({
// //             id_venta: idVenta,
// //             id_producto: detalle.id,
// //             cantidad: detalle.cantidad,
// //             precio_unitario: detalle.precio_unitario,
// //             descuento: detalle.descuento,
// //             subtotal: detalle.subtotal
// //           });
// //         })
// //       );

// //       console.log("Venta registrada exitosamente");
// //     } catch (error) {
// //       console.error("Error al registrar la venta:", error);
// //       console.log(idVenta);
// //     }
// //   });

// //   const agregarProducto = (producto) => {
// //     Calcular precio unitario
// //     console.log("valor bulto: ", typeof(producto.valor_bulto))
    
// //     const valorBulto = parseFloat(producto.valor_bulto)
// //     const unidadesBulto = parseFloat(producto.uniddades_bulto)
    
// //     console.log("valor bulto con const: ", typeof(valorBulto))
// //     console.log("unidades bulto", unidadesBulto)
    
    
    
// //     const precioUnitario = valorBulto / unidadesBulto;
// //     console.log("unidadeeeeeeeeeees bulto: ", producto.uniddades_bulto)
// //     console.log(precioUnitario)

// //     Añadir producto al detalle de venta
// //     setDetalleVenta([
// //       ...detalleVenta,
// //       {
// //         id: producto.id,
// //         descripcion: producto.descripcion,
// //         cantidad: 1,
// //         precio_unitario: precioUnitario,
// //         descuento: 0,
// //         subtotal: precioUnitario
// //       }
// //     ]);

// //     Calcular el total de la venta
// //     const nuevoTotal = totalVenta + precioUnitario;
// //     setTotalVenta(nuevoTotal);
// //   };

// //   return (
// //     <div>
// //       <form onSubmit={onSubmitVenta}>
// //         <label>Forma de Pago:</label>
// //         <input type="text" {...register("forma_pago", { required: true })} />
// //         {errors.forma_pago && <span>Este campo es requerido</span>}

// //         <button type="submit">Registrar Venta</button>
// //       </form>

// //       <div>
// //         <h2>Productos Disponibles</h2>
// //         <ul>
// //           {productos.map((producto) => (
// //             <li key={producto.id}>
// //               {producto.descripcion} - ${producto.valor_bulto}
// //               <button onClick={() => agregarProducto(producto)}>Agregar</button>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>

// //       <div>
// //         <h2>Detalle de Venta</h2>
// //         <ul>
// //           {detalleVenta.map((detalle) => (
// //             <li key={detalle.id}>
// //               {detalle.descripcion} - {detalle.cantidad} x {detalle.precio_unitario} = ${detalle.subtotal}
// //             </li>
// //           ))}
// //         </ul>
// //         <p>Total Venta: ${totalVenta}</p>
// //       </div>
// //     </div>
// //   );
// // }


// import React from "react";
// import { useForm } from "react-hook-form";
// import { crearVentas } from "../api/venta.api";
// import { useNavigate } from "react-router-dom";

// export function RegistroVentaPage() {
//   const navigate = useNavigate();
//   const { register, handleSubmit } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       const res = await crearVentas(data);
//       const nuevaVentaId = res.data.id;
//       navigate(`/venta/${nuevaVentaId}/agregar-detalle`);
//     } catch (error) {
//       console.error("Error al registrar la venta:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Registro de Venta</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label htmlFor="forma_pago">Forma de Pago:</label>
//           <input type="text" id="forma_pago" {...register("forma_pago")} />
//         </div>
//         <button type="submit">Registrar Venta</button>
//       </form>
//     </div>
//   );
// }
import React from "react";
import { useForm } from "react-hook-form";
import { crearVentas } from "../api/venta.api";
import { useNavigate } from "react-router-dom";

export function RegistroVentaPage() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await crearVentas(data);
      const nuevaVentaId = res.data.id;
      navigate(`/venta/${nuevaVentaId}/agregar-detalle`);
    } catch (error) {
      console.error("Error al registrar la venta:", error);
    }
  };

  return (
    <div>
      <h2>Registro de Venta</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="forma_pago">Forma de Pago:</label>
          <input type="text" id="forma_pago" {...register("forma_pago")} />
        </div>
        <button type="submit">Registrar Venta</button>
      </form>
    </div>
  );
}