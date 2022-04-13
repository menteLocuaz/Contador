import {useState } from 'react';
import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';

function App() {

const[numero,setNumero]=useState(0);
//aumento del valor 
const eventoClick= () => {
  setNumero(numero+1);
};
//contador a cero
const reiniciarContador=()=>{
  setNumero(0);
};
  return (
    <div className="App">
      <div className='container'>
        <h1> Estado Actual </h1>
         <div className='container'>
          <Contador
          numero={numero} />
         <Boton
        texto='click'
        botonClick={true}
        eventoClick={eventoClick} />
        <Boton
        texto='Reiniciar'
        botonClick={false}
        eventoClick={reiniciarContador}
        />
         </div>
      </div>
    </div>
  );
}

export default App;
