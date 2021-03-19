import PropTypes from 'prop-types'; // importando propTypes para poder definir los props oblgatorios

// los componentes se nombran usando el UperCamelCase
// functionalComponents FC

const PrimeraApp = ({ saludo }) => {

    return (
        <>
            <h1>{saludo}</h1>
            {/* <p>Trataremos de imprimir un objeto en html para ello usamos el JSON.stringify {JSON.stringify(objeto)}</p> */}
            <p> estamos retornando en un componente en un fragment</p>
            <a href='https://dev.to/izakntun/todo-app-con-react-ejemplo-basico-16n0'>enlace</a>
        </>
    )
}

PrimeraApp.propTypes = { // usando el propTypes definimos el tipo de dato de los  prop que recibimos y si son requeridos
    saludo: PropTypes.string.isRequired // tipo de dato string y isRequerido = obligatorio
}


// usando el <> y wl </> podremos colocar varias lineas de html
export default PrimeraApp;