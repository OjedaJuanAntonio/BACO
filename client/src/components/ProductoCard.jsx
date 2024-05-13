import { useNavigate } from "react-router-dom"

export function ProductoCard({ producto, categoria }){
    const navigate = useNavigate()
    return (
            <div key={producto.id} style={{background: "black"}}
            onClick={() => {

                navigate(`/producto/${producto.id}`)


            }}
            >
                <div><p><strong>{producto.descripcion}</strong> categoria: {categoria}</p> </div>
                <hr />
            </div>
    )
}
