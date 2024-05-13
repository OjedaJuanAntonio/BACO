// import React, { useEffect, useState } from "react";
// import {Link, useNavigate} from "react-router-dom"
// import { obtenerVentas } from "../api/venta.api"; // Importa la función para obtener las ventas
// import { VentaCard } from "../components/ventaCard";
// import { crearVentas } from "../api/venta.api";

// export function VentaPage() {
//   const [ventas, setVentas] = useState([]);
//   const navigate = useNavigate([]);

//   useEffect(() => {
//     async function fetchVentas() {
//       try {
//         const res = await obtenerVentas(); // Llama a tu función para obtener las ventas desde la API
//         setVentas(res.data);
//       } catch (error) {
//         console.error("Error al obtener las ventas:", error);
//       }
//     }
//     fetchVentas();
//   }, []);

//   const handleNuevaVenta = async () => {
//     try{
//       const nuevaVenta = {
//         froma_pago: "Efec"
//       };
//       const res = await crearVentas(nuevaVenta);
//       const nuevaVentaId = res.data.id;
//       navigate(`/venta/${nuevaVentaId}/agregar-detalle`);
//     } catch (error) {
//       console.error("Error en ventapage nueva parte", error);
//     }
//   }

//   return (
//     <div>
//       <h1>Lista de Ventas</h1>
//       <button onClick={handleNuevaVenta}>Nueva Venta</button>
//       <ul>
//         {ventas.map((venta) => (
//           <li key={venta.id}>
//             <VentaCard venta={venta}/>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { obtenerVentas } from "../api/venta.api"; // Importa la función para obtener las ventas
// import { VentaCard } from "../components/ventaCard";
// import { crearVentas } from "../api/venta.api";

// export function VentaPage() {
//   const [ventas, setVentas] = useState([]);
//   const [formaPagoId, setFormaPagoId] = useState(""); // Estado para almacenar el ID de la forma de pago seleccionada
//   const [formaPagoOptions, setFormaPagoOptions] = useState([]); // Opciones de formas de pago
//   const navigate = useNavigate();

//   useEffect(() => {
//     async function fetchVentas() {
//       try {
//         const res = await obtenerVentas();
//         setVentas(res.data);
//       } catch (error) {
//         console.error("Error al obtener las ventas:", error);
//       }
//     }
//     fetchVentas();
//   }, []);

//   useEffect(() => {
//     // Aquí obtienes las opciones de forma de pago desde tu API
//     // Reemplaza esta lógica con tu función para obtener las formas de pago
//     const opcionesFormaPago = [
//       { id: 1, nombre: "Efectivo" },
//       { id: 2, nombre: "Tarjeta de Crédito" },
//       // Agrega más opciones según tu modelo de datos
//     ];
//     setFormaPagoOptions(opcionesFormaPago);
//   }, []);

//   const handleFormaPagoChange = (event) => {
//     setFormaPagoId(event.target.value); // Actualiza el estado con el ID de la forma de pago seleccionada
//   };

//   const handleNuevaVenta = async () => {
//     try {
//       // Verifica que se haya seleccionado una forma de pago
//       if (!formaPagoId) {
//         console.error("Debe seleccionar una forma de pago.");
//         return;
//       }

//       const nuevaVenta = {
//         forma_pago: formaPagoId // Usa el ID de la forma de pago seleccionada
//       };

//       const res = await crearVentas(nuevaVenta);
//       const nuevaVentaId = res.data.id;
//       navigate(`/venta/${nuevaVentaId}/agregar-detalle`);
//     } catch (error) {
//       console.error("Error al crear nueva venta:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Lista de Ventas</h1>
//       {/* Formulario para seleccionar la forma de pago */}
//       <form>
//         <label htmlFor="formaPago">Forma de Pago:</label>
//         <select id="formaPago" value={formaPagoId} onChange={handleFormaPagoChange}>
//           <option value="">Seleccionar forma de pago</option>
//           {formaPagoOptions.map((option) => (
//             <option key={option.id} value={option.id}>{option.nombre}</option>
//           ))}
//         </select>
//       </form>
//       {/* Botón para crear una nueva venta */}
//       <button onClick={handleNuevaVenta}>Nueva Venta</button>
//       {/* Lista de ventas existentes */}
//       <ul>
//         {ventas.map((venta) => (
//           <li key={venta.id}>
//             <VentaCard venta={venta} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// En tu componente VentaPage

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { obtenerVentas } from '../api/venta.api';
import { VentaCard } from '../components/ventaCard';
import { crearVentas } from '../api/venta.api';
import { obtenerformapago } from '../api/formapago.api';

export function VentaPage() {
  const [ventas, setVentas] = useState([]);
  const [formaPagoId, setFormaPagoId] = useState('');
  const [formaPagoOptions, setFormaPagoOptions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchVentas() {
      try {
        const res = await obtenerVentas();
        setVentas(res.data);
      } catch (error) {
        console.error('Error al obtener las ventas:', error);
      }
    }
    fetchVentas();
  }, []);

  useEffect(() => {
    async function fetchFormasPago() {
      try {
        const formasPago = await obtenerformapago();
        setFormaPagoOptions(formasPago);
      } catch (error) {
        console.error('Error al obtener las formas de pago:', error);
      }
    }
    fetchFormasPago();
  }, []);

  const handleFormaPagoChange = (event) => {
    setFormaPagoId(event.target.value);
  };

  const handleNuevaVenta = async () => {
    try {
      if (!formaPagoId) {
        console.error('Debe seleccionar una forma de pago.');
        return;
      }

      const nuevaVenta = {
        forma_pago: formaPagoId
      };

      const res = await crearVentas(nuevaVenta);
      const nuevaVentaId = res.data.id;
      navigate(`/venta/${nuevaVentaId}/agregar-detalle`);
    } catch (error) {
      console.error('Error al crear nueva venta:', error);
    }
  };

  return (
    <div>
      <h1>Lista de Ventas</h1>
      <form>
        <label htmlFor="formaPago">Forma de Pago:</label>
        <select id="formaPago" value={formaPagoId} onChange={handleFormaPagoChange}>
          <option value="">Seleccionar forma de pago</option>
          {formaPagoOptions.map((option) => (
            <option key={option.id} value={option.id}>{option.nombre}</option>
          ))}
        </select>
      </form>
      <button onClick={handleNuevaVenta}>Nueva Venta</button>
      <ul>
        {ventas.map((venta) => (
          <li key={venta.id}>
            <VentaCard venta={venta} />
          </li>
        ))}
      </ul>
    </div>
  );
}
