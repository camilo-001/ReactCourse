
// los componentes se nombran usando el UperCamelCase
// functionalComponents FC

const PrimeraApp = ({ saludo = 'Hola, soy una prop por defecto si no se envia nada desde el componenten padre en index.js' }) => {

/* -- COMUNICACIÓN ENTRE COMPONENTES 
    saludo, es un property que nos puede enviar directamente el componente padre, esta prop podemos
    inicializarla y podemos usarla dentro del html solo llamandola.
*/
    
   /*  -- IMPRESION DE VARIABLES EN HTML
    const saludo = 'Estamos probando como imprimir un const dentro del HTML'; 

      const objeto = {
        nombre: 'objeto',
        apellido: 'literal',
        edad: 23
    } */

    return (
        <>
            <h1>{saludo}</h1>
            {/* <p>Trataremos de imprimir un objeto en html para ello usamos el JSON.stringify {JSON.stringify(objeto)}</p> */}
            <p> estamos retornando en un componente en un fragment</p>
            <a href='https://dev.to/izakntun/todo-app-con-react-ejemplo-basico-16n0'>enlace</a>
        </>
    )
}
// usando el <> y wl </> podremos colocar varias lineas de html
export default PrimeraApp;