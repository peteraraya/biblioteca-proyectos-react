

export const UseReducer = () => {

  const initialState = [{
    id: 1,
    todo: 'Comprar Leche',
    done: false
  }];


  // Puede ser considerado un reducer
  const todoReducer = (state = initialState, action:any) => {
    // ya que solo me esta devolviendo el estado anterior agrego un if, y agregamos ? en el action en caso de error por undefined
    if (action?.type === 'agregar') {
      return [...state, action.payload]
    }

    return state
  }
  let todos = todoReducer(initialState, { type: 'agregar', payload: { id: 2, todo: 'Comprar Pan', done: false } });

  todos = todoReducer(todos, { type: 'agregar', payload: { id: 3, todo: 'Comprar queso', done: false } });



  return (
    <div className="row mt-3">
      <h1 className="text-center">Uso de Use reducer</h1>
      <div className="col-12"> 
        {todos.map((todo, i) => (
          <li key={todo.id}>
            {i + 1} {todo.todo}
          </li>
        ))}
      </div>


    </div>
  )
}

export default UseReducer;