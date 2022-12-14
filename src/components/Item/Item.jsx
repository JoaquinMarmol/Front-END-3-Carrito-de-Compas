import React,{useState,useEffect} from 'react'

// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

const Item = ({imagen,nombre,descripcion,stock,agregarCarrito}) => {
        
    const [stockContador, setStockContador] = useState()
    const [esconderBoton, setEsconderBoton] = useState(false)
    const [boton,setBoton] = useState("Comprar")
        
    useEffect(()=> {
        setStockContador(stock)
    },[])

    useEffect(()=>{
        if(stockContador ===0){
            setEsconderBoton(true)
            setBoton("sin stock")
            setStockContador("Sin Stock");
        }
    },[stockContador])

    const handleClick = () => {
        if( stockContador ===0){
            setEsconderBoton(true)
            setBoton("sin stock")
            setStockContador("Sin Stock");
        }else{
            setStockContador( stockContador=> stockContador -1)
            agregarCarrito();
        }
    } 
    
    return (
    <div className='producto'>
        <img src={imagen} alt="" />
        <h3>{nombre} </h3>
        <p> {descripcion}</p>
        <h5> En stock:
            <span> {
                    stockContador
                    }
            </span>
        </h5>
        
        <button onClick={handleClick} disabled={esconderBoton} > {boton}</button>
    </div>
    )
}

export default Item;