import {Link} from 'react-router-dom'

export function Navigation(){
    return (
        <div>
            <Link to="/producto">
                <h1>Baco App</h1>
            </Link>
            <Link to="/producto/registrar">Registrar Producto</Link>
            <Link to="/venta">Registrar Venta</Link>
        </div>
    )

}