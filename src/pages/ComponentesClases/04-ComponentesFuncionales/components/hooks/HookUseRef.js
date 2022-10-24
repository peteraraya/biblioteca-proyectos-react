import { useRef } from 'react';

// Orientado a funciones
const HookUseRef = () => {

  const ref = useRef();

  const inputRef = useRef();

  const click = () => {
    console.log('Current : ',ref.current);
    console.log('Altura  : ', ref.current.clientHeight);
    ref.current.innerHTML = 'Chanchito feliz';
  }

  const focus = () => {
    inputRef.current.focus();
  }

  return (
    <div style={styles.dv}>
      <h1>Ejemplo useRef</h1>
      <hr />
      <div ref={ref} style={styles.dv} onClick={click}> ejemplo de ref </div>

      <p>Ejemplo focus</p>
      <input ref={inputRef}/>
      <button onClick={focus} style={styles.button}>Focus</button>
      <div onClick={click} ref={ref} >Lala</div>
    </div>
  )
}

export default HookUseRef;


const styles = {
  dv: {
    marginLeft: '50px',
    marginTop: '50px',
  },
  button: {
    padding: '4px ',
    margin: '1px',
    backgroundColor: '#A65DF3',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: '1px 0px 0px rgb(10, 5, 0, 0.5)',
  }
}


/**
 * Reglas de los hooks
 *  1.  no se llaman en loops, ni condiciones, ni while ni nada entre llaves
 *  2.  siempre se llaman en la nivel más alto del componente
 *
 *  Solo se llaman en dos partes
 *  1 - Custom hooks
 *  2 - Componentes en react
 *
 */