import axios from 'axios';

const ventaApi = axios.create({
    baseURL: 'http://localhost:8000/producto/api/v1/venta/'
});

export const getAllVentas = () => {
    return ventaApi.get("/")
        .catch(error => {
            console.error('Error al obtener Venta:', error);
            throw error; // Re-lanzar el error para que pueda ser manejado en otro lugar si es necesario
        });
};

export const crearVentas = async (venta) => {
    try {
        return await ventaApi.post("/", venta);
    } catch (error) {
        console.error('Error al registrar Venta CAPOOOOOOOOOOOOOO:', error);
        console.log(error);
        console.log('Objeto de Venta:', venta);
        throw error; // Re-lanzar el error para que pueda ser manejado en otro lugar si es necesario
    }
};


export const borrarVenta = (id) => ventaApi.delete(`/${id}/`)

export const editarVenta = (id, venta) => ventaApi.put(`/${id}/`, venta)

//export const obtenerVenta = (id) => ventaApi.get(`/${id}/`)
export const obtenerVentas = (id) => ventaApi.get('/')