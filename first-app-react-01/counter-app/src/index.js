
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';

// const saludoss = <h1>Hola mundo</h1>;// etiqueta a renderizar esto es un ejem- el verdadero lo importamos desde PrimeraAPP


const divRoot = document.querySelector('#root'); // capturando etiqueta donde renderizamos el codigo



ReactDOM.render(<CounterApp value = {12345}/>, divRoot); 

