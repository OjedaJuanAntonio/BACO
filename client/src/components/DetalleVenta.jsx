import React from "react"

function DetalleVenta({DetalleVenta, totalVenta}){
    return(
        <div>
            <h2>Detalle de Venta</h2>
            <ul>
                {DetalleVenta.map((detalle)=>(
                    <li key={detalle.id}>
                        {detalle.cantidad} x {detalle.precio_unitario} = ${detalle.subtotal}
                    </li>
                ))}
            </ul>
            <p>Total Venta: %{totalVenta}</p>
        </div>
    );
}

export default DetalleVenta;