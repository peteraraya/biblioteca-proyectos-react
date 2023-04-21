import { useState } from 'react'

export const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial);
  const incrementar = () => {
    setContador(contador + 1);
  }
  return [contador, incrementar];
}
