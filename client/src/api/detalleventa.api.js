import axios from 'axios';

const detalleventaApi = axios.create({
    baseURL: 'http://localhost:8000/producto/api/v1/Detalleventa/'
});

export const getAllDetalleVentas = () => {
    return detalleventaApi.get("/")
        .catch(error => {
            console.error('Error al obtener detalle:', error);
            throw error; // Re-lanzar el error para que pueda ser manejado en otro lugar si es necesario
        });
};

export const crearDetalleVentas = async (venta) => {
    try {
        return await detalleventaApi.post("/", venta);
    } catch (error) {
        console.error('Error al registrar Detalle de Venta:', error);
        throw error; // Re-lanzar el error para que pueda ser manejado en otro lugar si es necesario
    }
};


export const borrarDetalleVenta = (id) => detalleventaApi.delete(`/${id}/`)

export const editarDetalleVenta = (id, venta) => detalleventaApi.put(`/${id}/`, venta)

export const obtenerDetalleVenta = (id) => detalleventaApi.get(`/${id}/`)