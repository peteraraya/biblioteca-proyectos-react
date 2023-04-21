import { useCounter, useFetch } from "../../../../../hooks";

export const MultipleCustomHooks = () => {


    const { counter, increment } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    // si trae data extrae la data en la posición 0
    const { author, quote }: any = !!data && data[0];



    return (
        <div className="p-2">
            <h2>Multiple Hooks</h2>
            <h4>Breaking Bad Quotes !!!!!</h4>
            <hr />

            {
                loading  // OPERADOR TERNARIO
                    ?
                    (
                        <div className="alert alert-info text-center p-2">
                            Loading...
                        </div>
                    )
                    :
                    (
                        <blockquote className="blockquote text-end">
                            <p className="mb-0">{quote}</p>
                            <footer className="blockquote-footer mt-3">
                                {author}
                            </footer>
                        </blockquote>

                    )
            }


            <button
                className="btn btn-primary "
                onClick={() => increment()}
            > Siguiente frase

            </button>


        </div>
    )
}

// con doble negación transformo ese valor en un boleano
// !null = true   |   !!null = false 