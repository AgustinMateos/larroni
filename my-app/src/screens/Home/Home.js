import { useEffect, useState } from 'react';
import Card from '../../componentes/Home/Card/cards';
import Catalogo from '../../ApiProd/api'
import { useParams } from "react-router-dom"
import {darkModeContext} from "../../Context/Context"
import '../../screens/Home/Home.css'
import {doc,getFirestore, collection, getDocs} from 'firebase/firestore'



function Home() {
  const [filter, setFilter] = useState("");
  const [productos, setProductos] = useState([]);
  const {cat}=useParams();

  const getProductos = () => {
    setTimeout(() => {
      const productos = Catalogo;
      setProductos(productos)
    },3000);
  }
  useEffect(() => {
    const db = getFirestore();
    const itemsCatalagoRef=collection(db,"items")
    getDocs(itemsCatalagoRef).then(
      (snapshot)=>{
      snapshot.docs.map((doc)=>{
        console.log(doc.data())
      })
      }
    )
     getProductos()
     }, []);

  return (
    
    <div className='home-principal-container'>
      <h1>Bebidas Larroni</h1>
      <div>
      <p>Buscador</p>
      <input id="filter" name="filter" type="text" value={filter}
        onChange={(event) => setFilter(event.target.value)}/>
      </div>

      <div className='home-cards-container'>
       <darkModeContext.Provider value={false}>
        {cat 
        ? Catalogo
        .filter((producto)=>producto.producto.includes(filter))
        .filter((productos)=>productos.categoria === cat)
        .map((productos, i) => (
          <Card
            key={i}
            id={productos.id}
            producto={productos.producto}
            precio={productos.precio}
            categoria={productos.categoria}
            tipo={productos.tipo}
            imagen={productos.imagen}
            stock={productos.stock}
          />)):
          Catalogo.filter((producto)=>producto.producto.includes(filter))
          .map((productos, i) => (
          <Card
            key={i}
            id={productos.id}
            producto={productos.producto}
            precio={productos.precio}
            categoria={productos.categoria}
            tipo={productos.tipo}
            imagen={productos.imagen}
            stock={productos.stock}
          />))}</darkModeContext.Provider>
      </div>
    </div>
  )
  
}

export default Home;


