import axios from 'axios'

export const getCategorias = () => {
    return (axios.get('http://localhost:8000/producto/api/v1/categoria/'))
}