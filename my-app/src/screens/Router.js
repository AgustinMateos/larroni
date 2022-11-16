import Home from "./Home/Home"
import {BrowserRouter, Routes, Route}from "react-router-dom"
import Producto from "./Productos/Producto"
import Nav from "../componentes/UI/Nav"
import Footer from "../componentes/Footer/Footer"


const Router=()=>{
   return (
   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Producto/:idproducto" element={<Producto/>}></Route>
    <Route path="/categoria/:cat" element={<Home/>}></Route>
    <Route path="/categoria/:cat/Producto/:idproducto" element={<Producto/>}></Route>
    <Route path="/*" element={<div>404 error</div>}></Route>
   </Routes>
   <Footer/>
   </BrowserRouter>
   )
}

export default Router