import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getObjetById } from "../../ApiProd/api"
import './Producto.css'

const Producto =()=>{
    const {idproducto}=useParams()
    const [producto,setproductos]=useState({})
    useEffect(()=>{
      setproductos(getObjetById(idproducto))
    })
   
   const handlerSumar=()=>{
   
     setContador(contador + 1)
   }
   const handlerRestar=()=>{ 
    if (contador > 0){setContador(contador -1) }
    
  }

    const[contador,setContador]= useState(0);
    
  return(
    <div className="">
    <h1>Producto</h1>
    <div className="cardContainerProductoSelect"> 
       <h3>{producto.producto} </h3>
       <img src={producto.imagen} alt="cs"></img>
       <span> ${producto.precio}</span>
       <p>{producto.categoria}</p>
       <p>{producto.tipo}</p>
       <p>Descripcion: {producto.description}</p>
       <p>Stock: {producto.stock }</p>
        <button className="cardContainerProductoSelectButton" disabled={contador === 0 ? true : false} onClick={handlerRestar}> - </button>
        <p>{contador}</p>
        <button className="cardContainerProductoSelectButton" onClick={handlerSumar}> + </button>
      
       
    </div>
    </div>
  )

}

export default Producto