const Catalogo = [
{ "id": 0, "producto": "coca Cola", "categoria": "light", "tipo": "Retornable", "precio": "320","imagen":"../imagenes/cocacolaretornable1l.jpeg", "stock":100, "description":"asdadadadad" },
{ "id":1, "producto": "sprite","categoria": "light", "tipo": "Retornable", "precio": "320","stock":100, "imagen":"../imagenes/sprite1l.jpeg", "description":"asdadadadad"},
{ "id": 2, "producto": "paso de los Toros","categoria": "light", "tipo": "Retornable", "precio": "320","stock":100, "imagen":"../imagenes/pomelo1l.jpeg", "description":"asdadadadad" },
{ "id":3, "producto": "paso de los Toros","categoria": "light", "tipo": "Latita", "precio": "320","stock":100, "imagen":"../imagenes/pomelo1l.jpeg", "description":"asdadadadad" },
{ "id":4, "producto": "coca cola","categoria": "comun", "tipo": "Latita", "precio": "320","stock":100, "imagen":"../imagenes/latitacocacola.jpeg", "description":"asdadadadad" },
{ "id": 5, "producto": "paso de los Toros","categoria": "light", "tipo": "Retornable", "precio": "320","stock":100, "imagen":"../imagenes/pomelo1l.jpeg", "description":"asdadadadad" },
{ "id":6, "producto": "paso de los Toros","categoria": "comun", "tipo": "Latita", "precio": "320","stock":100, "imagen":"../imagenes/pomelo1l.jpeg", "description":"asdadadadad" },
{ "id":7, "producto": "coca cola","categoria": "comun", "tipo": "Latita", "precio": "320","stock":100, "imagen":"../imagenes/latitacocacola.jpeg", "description":"asdadadadad" },
{ "id":8, "producto": "coca cola","categoria": "comun", "tipo": "Latita", "precio": "320","stock":100, "imagen":"../imagenes/latitacocacola.jpeg", "description":"asdadadadad" },
{ "id": 9, "producto": "paso de los Toros","categoria": "light", "tipo": "Retornable", "precio": "320","stock":100, "imagen":"../imagenes/pomelo1l.jpeg", "description":"asdadadadad" },
{ "id":10, "producto": "paso de los Toros","categoria": "comun", "tipo": "Latita", "precio": "320","stock":100, "imagen":"../imagenes/pomelo1l.jpeg", "description":"asdadadadad" },
{ "id":11, "producto": "coca cola","categoria": "comun", "tipo": "Latita", "precio": "320","stock":100, "imagen":"../imagenes/latitacocacola.jpeg", "description":"asdadadadad" },
]

export const getObjetById =(id)=>{
    return Catalogo[id];
}



export default Catalogo;