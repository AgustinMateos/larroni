import "./cards.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { darkModeContext } from "../../../Context/Context"

export const Card = ({ producto, precio, categoria, tipo, imagen, stock, id }) => {
    const isDarkMode = useContext(darkModeContext)
    return (
        <div className="cardContainerData">
            <Link to={`producto/${id}`} >
                <img alt={producto}  src={imagen} />
                <div className="cardContainerDescription">
                    <h3>{producto}</h3>
                    <p>categoria:  {categoria}</p>
                    <p>{tipo}</p>
                    {isDarkMode}
                    <span> $ {precio}</span>
                    <p>Stock: {stock}</p>
                    </div>

            </Link>
        </div>

    )
}

export default Card