import { useEffect, useState } from 'react';
import Mesaage from './Message';



export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: '',
    });


    const { name, email } = formState;

    useEffect(() => {
        // console.log('hey - primera vez');
    }, []);

    // se recomienda .... 
    useEffect(() => {
        // console.log('formState Cambió');
    }, [formState]);

    // efecto cuando el email cambie
    useEffect(() => {
        // console.log('email Cambió');
    }, [email]);

    const handleInputChange = ({ target }:any) => {
        // console.log(e.target.name);
        // console.log(e.target.value);

        setformState({
            ...formState,
            [target.name]: target.value
        });
    }

    return (
        <>
            <h4>Simple Form</h4>
            <hr />

            <div className="form-group mb-2">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>


            {(name === '123') && <Mesaage />}
        </>
    )
}

export default SimpleForm;



/**
 * useEffect : es un hook que nos permite ejecutar algun efecto secundario cuando algo suceda en nuestros componentes
 *  trabajar los efectos de forma individual
 *  No podemos tener un hook que se renderize de manera condicional en un componente - es considerado como una mala practica
 *  No se aceptan hook condionados
 *
 *  ¿Que retorna el useEffect ?
 *  una función
 */