import { memo } from 'react'

export const Small = memo( ({value}:any) => {

    console.log('Me volvi a llamar :( ');

    return (
    <small>{ value }</small>
    )
})


// memo : es una función que va a regresar la forma memorizada de mi componente
// y solo se va disparar si mis property cambian

// React.memo : es la forma que se utiliza en las documentaciones 