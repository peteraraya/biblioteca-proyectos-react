import { useEffect, useState } from 'react';

export const CounterApp = ({ value = 10 }) => {
  
  const [counter, setCounter] = useState<number>(value);
  
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [errorState, setErrorState] = useState<boolean>(false);

  const handleAdd = () => setCounter(counter + 1);
  
  const handleReset = () => setCounter(value);
  
  const handleSubstract = () => setCounter(counter - 1);

  useEffect(() => {
    if (counter <= 0) {
      setCounter(0);
      setErrorState(true);
      setErrorMessage('Debe ser un número mayor a 0');
    } 
    if (counter > 0) {
      setErrorState(false);
    }

  }, [counter])
  

  return (
    <div className="container-md text-center">
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button
        className="btn btn-primary me-2"
        onClick={handleAdd} >+1
      </button>
      <button
        className="btn btn-success me-2"
        onClick={handleReset} >Reset
      </button>
      <button
        className="btn btn-danger me-2"
        onClick={handleSubstract} >-1
      </button>
      <div className="text-danger mt-2">
        {errorState && errorMessage}
      </div>
    </div>
  )
}



export default CounterApp;
