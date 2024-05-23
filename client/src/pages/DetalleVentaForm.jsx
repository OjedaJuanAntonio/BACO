import React from "react";

export function DetalleVentaForm() {
  return (
    <div>
      <h2>Agregar Detalle de Venta</h2>
      <form>
        <div>
          <label htmlFor="producto">Producto:</label>
          <select id="producto" name="producto">
            {/* Opciones de productos */}
          </select>
        </div>
        <div>
          <label htmlFor="cantidad">Cantidad:</label>
          <input type="number" id="cantidad" name="cantidad" />
        </div>
        <div>
          <label htmlFor="descuento">Descuento:</label>
          <select id="descuento" name="descuento">
            <option value="3">3%</option>
            <option value="7">7%</option>
            <option value="9">9%</option>
          </select>
        </div>
        <div>
          <button type="submit">Agregar Detalle</button>
        </div>
      </form>
    </div>
  );
}
