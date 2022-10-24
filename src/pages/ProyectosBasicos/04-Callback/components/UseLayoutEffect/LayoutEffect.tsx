import { useLayoutEffect, useRef, useState } from 'react'
import { useCounter, useFetch } from '../../../../../hooks';

export const LayoutEffect = () => {


  const { counter, increment } = useCounter(1);

  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  // si trae data extrae la data en la posición 0
  const { quote }: any = !!data && data[0];

  // Mantener la referencia
  const pTag:any = useRef();


  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {

    console.log(pTag.current.getBoundingClientRect());

    setBoxSize(pTag.current.getBoundingClientRect());

  }, [quote])


  return (
    <div className='p-2'>
      <h2>Layout Effects !!!!!</h2>
      <h4>useLayoutEffect</h4>
      <hr />


      <blockquote className="blockquote text-right">
        <p
          className="mb-0"
          ref={pTag}
        >{quote}</p>
      </blockquote>

      <pre>
        {JSON.stringify(boxSize, null, 3)}
      </pre>


      <button
        className="btn btn-primary"
        onClick={() => increment() }
      > Siguiente frase

      </button>


    </div>
  )
}



function RefObject<T>() {
  throw new Error('Function not implemented.');
}
// Luego que se renderize layoutEffects : puedo sacar mediciones de como quedaron divs o diferentes componentes
// osea los tamaños o ejecutar odigo cuando se rederiza html