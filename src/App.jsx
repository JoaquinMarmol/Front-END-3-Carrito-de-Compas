// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.
import Listado from './components/Listado/Listado.jsx'
import Cabecera from './components/Cabecera/Cabecera.jsx'

import React,{useState} from 'react';


const App = () => {

  const [carrito, setCarrito] = useState(0);
  const agregarCarrito = () => {
    setCarrito(carrito => carrito + 1)
  }

return (
    <div className="App">
        <Cabecera carrito={carrito}  />
        <Listado agregarCarrito={agregarCarrito} />
    </div>
  );
}

export default App;
