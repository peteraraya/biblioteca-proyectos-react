import { useState } from "react";

// Orientado a funciones
const App = () => {
  const [dataState, setDataState] = useState('');

  // Formulario utilizando componente no controlado
  const submit = (e) => {
    // e : se encarga de enviarlo a nuestro endpoint
    e.preventDefault(); // evita refrescar la página
    console.log(e.target);
    const data = Array.from(new FormData(e.target));
    // obtenemos objetos de formulario
    console.log(Object.fromEntries(data));
    setDataState(data);
  };

  return (
    <>
    <form onSubmit={submit} style={styles.form}>
      <kbd>Formulario no controlado</kbd>
      <hr />
      <div>
        <span>campo 1 : </span>
        <input name='campo' />
      </div>
      <span>campo 2 : </span>
      <input name='campo-2' type='text' />
      <input type='submit' value='Enviar' style={styles.submitButton} />
      </form>
      <pre>
        {JSON.stringify(dataState)}
      </pre>
    </>
  )
}

export default App;


const styles = {
  form: {
    marginLeft: '10px',
    marginTop: '20px',
    padding: '50px',
    border: '1px solid #c0c0c0',
  },
  submitButton: {
    color: '#fff',
    padding: '3px',
    marginLeft: '5px',
    textAlign: 'right',
    backgroundColor: '#22f',
    border: 'none',
    cursor: 'pointer',
  }
}


/**
 * Reglas de los hooks
 */