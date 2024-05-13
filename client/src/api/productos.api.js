/*import axios from 'axios'

const productoApi = axios.create({
    baseURL: 'http://localhost:8000/producto/api/v1/producto/'
})

export const getAllProductos = () => productoApi.get("/")


export const crearProductos = (producto) => productoApi.post("/", producto);*/



import axios from 'axios';

const productoApi = axios.create({
    baseURL: 'http://localhost:8000/producto/api/v1/producto/'
});

export const getAllProductos = () => {
    return productoApi.get("/")
        .catch(error => {
            console.error('Error al obtener productos:', error);
            throw error; // Re-lanzar el error para que pueda ser manejado en otro lugar si es necesario
        });
};

export const crearProductos = async (producto) => {
    try {
        return await productoApi.post("/", producto);
    } catch (error) {
        console.error('Error al crear producto:', error);
        throw error; // Re-lanzar el error para que pueda ser manejado en otro lugar si es necesario
    }
};


export const borrarProducto = (id) => productoApi.delete(`/${id}/`)

export const editarProducto = (id, producto) => productoApi.put(`/${id}/`, producto)

export const obtenerProducto=(id) => productoApi.get(`/${id}/`)