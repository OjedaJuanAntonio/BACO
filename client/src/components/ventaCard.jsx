// import React from "react";
// import { useNavigate } from "react-router-dom";

// export function VentaCard({ venta }) {
//   const navigate = useNavigate();

//   return (
//     <div
//       key={venta.id}
//       style={{ background: "black", color: "white", padding: "10px", margin: "10px" }}
//       onClick={() => {
//         navigate(`/venta/${venta.id}`);
//       }}
//     >
//       <div>
//         <p>
//           <strong>Fecha:</strong> {venta.fecha}
//         </p>
//         <p>
//           <strong>Forma de Pago:</strong> {venta.forma_pago}
//         </p>
//         <p>
//           <strong>Total:</strong> ${venta.total}
//         </p>
//       </div>
//       <hr style={{ backgroundColor: "white" }} />
//     </div>
//   );
// }


import React from "react";

export function VentaCard({ venta }) {
  //Implementa el componente de tarjeta para mostrar detalles de una venta individual
  return (
    <div>
      <h2>Detalle de Venta</h2>
      <p>ID: {venta.id}</p>
      <p>Fecha: {venta.fecha}</p>
      <p>Forma de Pago: {venta.formaPago}</p>
      <p>Total: ${venta.total}</p>
    </div>
  );
}
