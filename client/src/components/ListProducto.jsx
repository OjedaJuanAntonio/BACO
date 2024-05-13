import { useEffect, useState } from "react"
import { getAllProductos } from "../api/productos.api";
import { ProductoCard } from "./ProductoCard";

import { getCategorias } from "../api/categorias.api"



export function ListProducto(){
    const [productos, setProductos] = useState([])

    const [categorias, setCategorias] = useState({})

    useEffect(() => {
        async function cargarProductos(){
            const res = await getAllProductos()
            setProductos(res.data)
        }
        cargarProductos();
        async function cargarCategorias() {
            const resCategorias = await getCategorias();
            const categoriasObj = {};
            resCategorias.data.forEach(categoria => {
                categoriasObj[categoria.id] = categoria.nombre;
            });
            setCategorias(categoriasObj);
        }
        cargarCategorias();
    }, []);
    return(
        <div>
            {productos.map( (producto) => (
                <ProductoCard key={producto.id} producto={producto} categoria={categorias[producto.categoria] || 'Sin categoría'} />            
                ))}
        </div>

    )
}