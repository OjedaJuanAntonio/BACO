// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { obtenerVentas } from '../api/venta.api';
// import { VentaCard } from '../components/ventaCard';
// import { crearVentas } from '../api/venta.api';
// import { obtenerformapago } from '../api/formapago.api';
// import { obtenerProducto } from '../api/productos.api';

// export function VentaPage() {
//   const [ventas, setVentas] = useState([]);
//   const [formaPagoId, setFormaPagoId] = useState('');
//   const [formaPagoOptions, setFormaPagoOptions] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     async function fetchVentas() {
//       try {
//         const res = await obtenerVentas();
//         setVentas(res.data);
//       } catch (error) {
//         console.error('Error al obtener las ventas:', error);
//       }
//     }
//     fetchVentas();
//   }, []);

//   useEffect(() => {
//     async function fetchFormasPago() {
//       try {
//         const formasPago = await obtenerformapago();
//         setFormaPagoOptions(formasPago);
//       } catch (error) {
//         console.error('Error al obtener las formas de pago:', error);
//       }
//     }
//     fetchFormasPago();
//   }, []);

//   const handleFormaPagoChange = (event) => {
//     setFormaPagoId(event.target.value);
//   };

//   const handleNuevaVenta = async () => {
//     try {
//       if (!formaPagoId) {
//         console.error('Debe seleccionar una forma de pago.');
//         return;
//       }

//       const nuevaVenta = {
//         forma_pago: formaPagoId
//       };

//       const res = await crearVentas(nuevaVenta);
//       const nuevaVentaId = res.data.id;

//       // aca agrego 

//       const resProductos = await obtenerProducto();
//       const productosDisponibles = resProductos.data(); 


//       //hasta aca
//       navigate(`/venta/${nuevaVentaId}/agregar-detalle`);
//     } catch (error) {
//       console.error('Error al crear nueva venta:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Lista de Ventas</h1>
//       <form>
//         <label htmlFor="formaPago">Forma de Pago:</label>
//         <select id="formaPago" value={formaPagoId} onChange={handleFormaPagoChange}>
//           <option value="">Seleccionar forma de pago</option>
//           {formaPagoOptions.map((option) => (
//             <option key={option.id} value={option.id}>{option.nombre}</option>
//           ))}
//         </select>
//       </form>
//       <button onClick={handleNuevaVenta}>Nueva Venta</button>
//       <ul>
//         {ventas.map((venta) => (
//           <li key={venta.id}>
//             <VentaCard venta={venta} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
//}
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { obtenerVentas } from "../api/venta.api"; // Importa la función para obtener las ventas
import { VentaCard } from "../components/ventaCard";
import { crearVentas } from "../api/venta.api";

export function VentaPage() {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    async function fetchVentas() {
      try {
        const res = await obtenerVentas(); // Llama a tu función para obtener las ventas desde la API
        setVentas(res.data);
      } catch (error) {
        console.error("Error al obtener las ventas:", error);
      }
    }
    fetchVentas();
  }, []);

  const handleNuevaVenta = async () => {
    try {
      const nuevaVenta = {
        forma_pago: "Efectivo" // O el método de pago que corresponda
      };
      const res = await crearVentas(nuevaVenta);
      const nuevaVentaId = res.data.id;
      console.log("Nueva venta creada con ID:", nuevaVentaId);
    } catch (error) {
      console.error("Error al crear nueva venta:", error);
    }
  };

  return (
    <div>
      <h1>Lista de Ventas</h1>
      <button onClick={handleNuevaVenta}>Nueva Venta</button>
     <Link to="/venta/nueva">Nueva Venta</Link>

      <ul>
        {ventas.map((venta) => (
          <li key={venta.id}>
            <VentaCard venta={venta}/>
          </li>
        ))}
      </ul>
    </div>
  );
}


//   return (
//     <div>
//       <h1>Lista de Ventas</h1>
//       <form>
//         <label htmlFor="formaPago">Forma de Pago:</label>
//         <select id="formaPago" value={formaPagoId} onChange={handleFormaPagoChange}>
//           <option value="">Seleccionar forma de pago</option>
//           {formaPagoOptions.map((option) => (
//             <option key={option.id} value={option.id}>{option.nombre}</option>
//           ))}
//         </select>
//       </form>
//       <button onClick={handleNuevaVenta}>Nueva Venta</button>
//       <ul>
//         {ventas.map((venta) => (
//           <li key={venta.id}>
//             <VentaCard venta={venta} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
//}
