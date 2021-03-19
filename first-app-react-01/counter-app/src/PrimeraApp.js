import PropTypes from 'prop-types'; // importando propTypes para poder definir los props oblgatorios

// los componentes se nombran usando el UperCamelCase
// functionalComponents FC

const PrimeraApp = ({ saludo, subtitulo }) => { // definimos otro prop (subtitulos) para establecer el contenido por defercto

    return (
        <>
            <h1>{saludo}</h1>
            {/* <p>Trataremos de imprimir un objeto en html para ello usamos el JSON.stringify {JSON.stringify(objeto)}</p> */}
            <p>{subtitulo}</p>
            <a href='https://dev.to/izakntun/todo-app-con-react-ejemplo-basico-16n0'>enlace</a>
        </>
    )
}

PrimeraApp.propTypes = { // usando el propTypes definimos el tipo de dato de los  prop que recibimos y si son requeridos
    saludo: PropTypes.string.isRequired // tipo de dato string y isRequerido = obligatorio
}
PrimeraApp.defaultProps = { // usando el defaultProps podemos definir el contenido por defecto de los props 
    subtitulo: 'soy un subtitulo',
    saludo: 'soy un saludo por default'
}
// usando el <> y wl </> podremos colocar varias lineas de html
export default PrimeraApp;