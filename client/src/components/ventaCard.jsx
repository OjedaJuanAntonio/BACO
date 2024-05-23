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
