
import { useState } from "react"
import HookUseEffect from "./components/hooks/HookUseEffect";
import HookUseReducer from "./components/hooks/HookUseReducer";
import HookUseRef from "./components/hooks/HookUseRef";
import HookUseState from "./components/hooks/HookUseState";

const ComponentesFuncionales = () => {
  const [value, setValue] = useState(
    {
      normal: '',
      texto: '',
      select: '',
      check: false,
      estado: 'feliz'
    }
  );

  const handleChange = ({ target }:any) => {
    if (target.value < 0) {
      return;
    }
    console.log(target.type, target.checked)
    setValue((state) => ({
      ...state,
      [target.name]: target.type === 'checkbox'
        ? target.checked
        : target.value
    }))

  }
  return (
    <div className="container border mt-1">
      <h3>Formulario controlado </h3>

      {/* Input */}
      <div className="input-group mb-3">
        <span className="input-group-text">Input</span>
        <input
          type="text"
          name="normal"
          className="form-control"
          style={styles.input}
          value={value.normal}
          onChange={handleChange}
          placeholder="introduce un valor"
        />
        {
          // @ts-ignore
          (value.length < 5)
            ? <span style={styles.validaError}>minimo 5 caracteres</span>
            : null
        }
      </div>

      {/* TextArea */}
      <div className="input-group mb-3">
        <span className="input-group-text">textarea</span>
        <textarea
          name='texto'
          className="form-control"
          onChange={handleChange}
          value={value.texto}
        />
      </div>

      {/* Checkbox */}
      <div className="input-group mb-3">
        <input
          type="checkbox"
          name="check"
          className="form-check-input mt-0"
          onChange={handleChange}
          checked={value.check}
        />

      </div>

      {/* Radio */}
      <div className="input-group mb-3">

        {/* <div onChange={handleChange}> forma 1 no podemos asignar valores por defecto */}
        <div>
          <label className="input-group mb-2 ">Chancho</label>
          <input
            type="radio"
            className="form-check-input mt-0"
            value="feliz"
            name="estado"
            onChange={handleChange}
            checked={value.estado === 'feliz'}
          />
          <span className="p-2">Feliz {':)'} </span>

          <input
            type="radio"
            className="form-check-input mt-0"
            value="triste"
            name="estado"
            onChange={handleChange}
            checked={value.estado === 'triste'}
          />
          <span className="p-2">Triste {':('} </span>

          <input
            type="radio"
            className="form-check-input mt-0"
            value="enojado"
            name="estado"
            onChange={handleChange}
            checked={value.estado === 'enojado'}
          />
          <span className="p-2">Enojado {'>:0'} </span>
        </div>


      </div>

      {/* Resultados */}
      <pre>
        {JSON.stringify(value)}
      </pre>

      {/* Select */}
      <p>Repaso</p>
      <div className="input-group mb-3">
        <select
          value={value.select}
          name="select"
          className="form-select"
          onChange={handleChange}
        >
          <option value=''>-- Seleccione --</option>
          <option value='usestate'>UseState</option>
          <option value='useeffect'>UseEffect</option>
          <option value='usereducer'>UseReducer</option>
          <option value='useref'>UseRef</option>
        </select>
      </div>

      <div className="card">
        {value.select === 'usestate' && <HookUseState />}
        {value.select === 'useeffect' && <HookUseEffect />}
        {value.select === 'usereducer' && <HookUseReducer />}
        {value.select === 'useref' && <HookUseRef />}

      </div>
    </div>
  )
}

export default ComponentesFuncionales;


const styles = {
  label: {
    fontSize: '0.7rem',
    fontWeight: 'bold'
  },
  input: {
    padding: '5px',
  },
  validaError: {
    color: 'red',
    fontSize: '10px',
    paddingLeft: '5px',
    paddingTop: '5px',
  }
}