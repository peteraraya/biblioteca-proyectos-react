import { useState } from 'react';
import shortid from 'shortid';
// css

interface PropsTareas {
  id: string,
  nombreTarea: string,
}


export const SimpleCrud = () => {

  const [tarea, setTarea] = useState<string>('');

  const [tareas, setTareas] = useState<PropsTareas[]>([]);

  const [modoEdicion, setModoEdicion] = useState<boolean>(false);

  const [id, setId] = useState<string>('');

  const [error, setError] = useState<string>('');
  

  const agregarTarea = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // validación
    if (!tarea.trim()) {
      console.log("elemento vacío");
      setError('Escriba algo por favor');
      return;
    }

    // Genero array con tareas
    setTareas([
      ...tareas,
      {
        id: shortid.generate(),
        nombreTarea: tarea,
      },
    ]);

    // Limipieza de formulario
    setError("");
    setTarea("");
    setModoEdicion(false);
  };

  // Eliminar Tareas
  const eliminarTarea = (id: string) => {
    // console.log(id);
    // Generaremos un arrayFiltrado
    const arrayFiltrado = tareas.filter((item) => item.id !== id);
    setTareas(arrayFiltrado);
  };

  // Editar Tarea
  const editar = (item: any) => {
    // console.log(item);

    setModoEdicion(true); // cambio la bandera de modoEdicion
    setTarea(item.nombreTarea); // relacionamos la tarea
    setId(item.id); // relacionamos el id
  };

  const editarTarea = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // cambio la bandera de modoEdicion
    if (!tarea.trim()) {
      console.log("elemento vacío");
      setError("Escriba algo por favor");
      return;
    }
    // si el id de tareas es igual al que estoy seleccionado
    const arrayEditado = tareas.map((item) =>
      item.id === id ? { id: id, nombreTarea: tarea } : item
    );
    setError("");
    setTareas(arrayEditado);
    setModoEdicion(false);
    setTarea("");
    setId("");
  };

  return (
    <div className="container-md">
      <h1 className="text-center">Crud Simple</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
            {
              tareas.length === 0 ? (
                <li className="list-group-item text-secondary ">No hay tareas</li>
              ) : (
                tareas.map((item) => (
                  <li className="list-group-item" key={item.id}>
                    <span className="lead text-dark font-weight-bold">{item.nombreTarea}</span>
                    <button
                      className="btn btn-danger  btn-sm float-end mx-2"
                      onClick={() => eliminarTarea(item.id)}
                    >
                      Eliminar
                    </button>

                    <button
                      className="btn btn-warning btn-sm float-end "
                      onClick={() => editar(item)}
                    >
                      Editar
                    </button>
                  </li>
                ))
              )
            }
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">
            {modoEdicion ? "Editar Tarea" : "Ingresar Tarea"}
          </h4>

          <form onSubmit={modoEdicion ? editarTarea : agregarTarea}>
            {
              error && tarea.length === 0 ? <span className="text-danger small">{error}</span> : null
            }
            <input
              type="text"
              className="form-control mb-2"
              placeholder="ingrese tarea"
              onChange={(e) => setTarea(e.target.value)}
              value={tarea}
            />
            {modoEdicion ? (
              <button className="btn btn-info btn-block float-end" type="submit">
                Editar
              </button>
            ) : (
              <button className="btn btn-dark btn-block float-end" type="submit">
                Agregar
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};


export default SimpleCrud;