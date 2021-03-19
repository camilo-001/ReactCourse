
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import './index.css';

// const saludoss = <h1>Hola mundo</h1>;// etiqueta a renderizar esto es un ejem- el verdadero lo importamos desde PrimeraAPP


const divRoot = document.querySelector('#root'); // capturando etiqueta donde renderizamos el codigo

/* usamos el ReactDOM.render para renderizar el codigo, ReactDOM tambien nos ofrece poder crear nuestro arbol de componentes lo cual 
nos permite comunicarnos entre componentes de una manera sencilla */
ReactDOM.render(<PrimeraApp />, divRoot); 