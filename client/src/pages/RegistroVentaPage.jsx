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

// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { obtenerformapago } from "../api/formapago.api";
// import { crearVentas } from "../api/venta.api";

// export function RegistroVentaPage() {
//   const { register, handleSubmit } = useForm();
//   const [formasDePago, setFormasDePago] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     async function fetchFormasDePago() {
//       try {
//         const res = await obtenerformapago();
//         setFormasDePago(res.data);
//       } catch (error) {
//         console.error("Error al obtener las formas de pago:", error);
//       }
//     }
//     fetchFormasDePago();
//   }, []);

//   const onSubmit = async (data) => {
//     try {
//       const res = await crearVentas(data);
//       const nuevaVentaId = res.data.id;
//       navigate(`/venta/${nuevaVentaId}/agregar-detalle`);
//     } catch (error) {
//       console.error("Error al crear nueva venta:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Nueva Venta</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label htmlFor="forma_pago">Forma de Pago:</label>
//           <select id="forma_pago" {...register("forma_pago")}>
//             {formadepago.map((formadepago) => (
//               <option key={formadepago.id} value={formadepago.id}>
//                 {formadepago.nombre}
//               </option>
//             ))}
//           </select>
//         </div>
//         <button type="submit">Crear Venta</button>
//       </form>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { obtenerformapago } from "../api/formapago.api";
import { crearVentas } from "../api/venta.api";

export function RegistroVentaPage() {
  const { register, handleSubmit } = useForm();
  const [formasDePago, setFormasDePago] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchFormasDePago() {
      try {
        const res = await obtenerformapago();
        setFormasDePago(res.data);
      } catch (error) {
        console.error("Error al obtener las formas de pago:", error);
      }
    }
    fetchFormasDePago();
  }, []);

  const onSubmit = async (data) => {
    try {
      const res = await crearVentas(data);
      const nuevaVentaId = res.data.id;
      navigate(`/venta/${nuevaVentaId}/agregar-detalle`);
    } catch (error) {
      console.error("Error al crear nueva venta:", error);
    }
  };

  return (
    <div>
      <h1>Nueva Venta</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="forma_pago">Forma de Pago:</label>
          <select id="forma_pago" {...register("forma_pago")}>
            <option value="">Seleccionar forma de pago</option>
            {formasDePago &&
              formasDePago.map((formaDePago) => (
                <option key={formaDePago.id} value={formaDePago.id}>
                  {formaDePago.nombre}
                </option>
              ))}
          </select>
        </div>
        <button type="submit">Crear Venta</button>
      </form>
    </div>
  );
}

//   return (
//     <div>
//       <h1>Nueva Venta</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label htmlFor="forma_pago">Forma de Pago:</label>
//           <select id="forma_pago" {...register("forma_pago")}>
//             <option value="">Seleccionar forma de pago</option>
//             {formasDePago && formasDePago.map((formaDePago) => (
//               <option key={formaDePago.id} value={formaDePago.id}>
//                 {formaDePago.nombre}
//               </option>
//             ))}
//           </select>
//         </div>
//         <button type="submit">Crear Venta</button>
//       </form>
//     </div>
//   );
// }
