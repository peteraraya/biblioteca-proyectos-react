import React from 'react';

interface HijoProps {
  numero: number;
  incrementar: (num: number) => void;
}

export const Hijo = React.memo(({ numero, incrementar }: HijoProps) => {

  console.log('  Me volví a generar :(  ');

  return (
    <>

      <button
      className="btn btn-primary mx-2 "
      onClick={() => incrementar(numero)}
    >
      {numero}
    </button>
    </>
  )
})
