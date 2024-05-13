import axios from 'axios';

const FORMAS_PAGO_API_URL = 'http://localhost:8000/producto/api/v1/forma_pago/';

export const obtenerformapago = async () => {
    try {
        const response = await axios.get(FORMAS_PAGO_API_URL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener las formas de pago:', error);
        throw error;
    }
};
