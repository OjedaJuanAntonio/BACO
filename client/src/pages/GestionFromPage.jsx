import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {crearProductos, borrarProducto, editarProducto, obtenerProducto} from "../api/productos.api";
import { getCategorias } from "../api/categorias.api"; // Importa la función para obtener las categorías
import {useNavigate, useParams} from 'react-router-dom'


export function GestionFormPage(){
    const {register, handleSubmit, formState:{errors}, setValue} = useForm();
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
      async function fetchCategorias() {
        try {
          const res = await getCategorias(); // Llama a tu función para obtener las categorías desde la API
          setCategorias(res.data);
        } catch (error) {
          console.error("Error al obtener las categorías:", error);
        }
      }
      fetchCategorias();
      async function cargarDatosProducto(){
        if (params.id){
          const respuesta = await obtenerProducto(params.id)
          setValue('categoria', respuesta.data.categoria)
          setValue('descripcion', respuesta.data.descripcion)
          setValue('cantidad', respuesta.data.cantidad)
          setValue('costo_bulto', respuesta.data.costo_bulto)
          setValue('valor_bulto', respuesta.data.valor_bulto)
          setValue('uniddades_bulto', respuesta.data.uniddades_bulto)
        }
      }
      cargarDatosProducto()
    }, []);
    const navigate = useNavigate()
    const params = useParams()

    const onSubmit= handleSubmit(async (data) => {
      if (params.id){
        await editarProducto(params.id, data)
      } else{
        const res = await crearProductos(data);
      }
      navigate('/producto')
    })

    return(
        <div>
            <form onSubmit={onSubmit}>
                <select {...register("categoria", { required: true })}>
                    {categorias.map((categoria) => (
                        <option key={categoria.id} value={categoria.id}>
                            {categoria.nombre}
                        </option>
                    ))}
                </select>
                {errors.categoria && <span>Este campo es requerido</span>}

                <textarea name="descripcion" cols="25" rows="1" placeholder="Descripción" 
                    {...register("descripcion", { required: true })}></textarea>
                {errors.descripcion && <span>Este campo es requerido</span>}

                <input type="number" placeholder="Cantidad" {...register("cantidad", { required: true })} />
                {errors.cantidad && <span>Este campo es requerido</span>}

                <input type="number" step="0.01" placeholder="Costo por bulto" 
                    {...register("costo_bulto", { required: true })} />
                {errors.costo_bulto && <span>Este campo es requerido</span>}

                <input type="number" step="0.01" placeholder="Valor por bulto" 
                    {...register("valor_bulto", { required: true })} />
                {errors.valor_bulto && <span>Este campo es requerido</span>}

                <input type="number" placeholder="Unidades por bulto" 
                    {...register("uniddades_bulto", { required: true })} />
                {errors.uniddades_bulto && <span>Este campo es requerido</span>}

                <button>Registrar</button>
            </form>

            {params.id && <button onClick={async()=>{
              const aceptar=window.confirm('Seguro que quiere borrar el Producto?')
              if (aceptar){
                await borrarProducto(params.id);
                navigate('/producto');
              }
            }}>Borrar</button>}
    </div>
    )
}