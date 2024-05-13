import React from "react";

function ListaProductos({productos, agregarProducto}) {
    return(
        <div>
            <h2>Productos Disponibles</h2>
            <ul>
                {productos.map ((oriducto)=>(
                    <li key={producto.id}>
                        {producto.descripcion} - ${producto.valor_bulto}
                        <button onClick={()=> agregarProducto(producto)}>Agregar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaProductos;