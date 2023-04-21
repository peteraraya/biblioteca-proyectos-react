import { useRef } from 'react';


// Orientado a funciones
const App = () => {
  const input = useRef();
  const file = useRef();
  // Formulario utilizando componente no controlado
  const submit = () => {
    console.log(input.current.value);
    console.log(file.current.files[0]);

    // Tomamos valores creando un formData
    const form = new FormData();

    form.append('archivo', file.current.files[0]);
    form.append('campo', input.current.value);
    fetch('/lala',{method:'POST', body:form })

  };

  return (
    <div style={styles.form}>
      <div>
        <span>campo 1</span>
        <input type="text" name="campo" ref={input} />
        <input type="file" ref={file} />
      </div>
      <input style={styles.submitButton} type="submit" value="Enviar" onClick={submit} />
    </div>
  )
}

export default App;


const styles = {
  form: {
    marginLeft: '10px',
    marginTop: '20px',
    padding: '50px',
    display:'inline-flex',
    border: '1px solid #c0c0c0',
  },
  submitButton: {
    color: '#fff',
    padding: '3px',
    marginLeft: '5px',
    backgroundColor: '#22f',
    border: 'none',
    cursor: 'pointer',
  }
}


/**
 * Crearemos referencias por cada uno de los input
 */