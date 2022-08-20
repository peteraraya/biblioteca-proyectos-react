import { useEffect } from 'react';
import { useForm } from '../../hooks';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    });

    //@ts-ignore
    const { name, email, password } = formValues;

    useEffect(() => {
        // console.log('email cambio');

    }, [email]);


    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h4>FormWithCustomHook</h4>
            <hr />

            <div className="form-group mb-2">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    //@ts-ignore
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group mb-2">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={email}
                    //@ts-ignore
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group mb-2">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*******"
                    value={password}
                    //@ts-ignore
                    onChange={handleInputChange}
                />
            </div>

            <button
                type="submit"
                className="btn btn-primary btn-block"
            >

                Guardar
            </button>


        </form>
    )
}


