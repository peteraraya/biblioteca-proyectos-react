
import { useCounter } from '../../hooks';

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter(5);

    return (
        <>
            <h4>Counter with Hook: {counter}</h4>
            <button onClick={() => increment(2)} className="btn btn-primary me-2">+</button>
            <button onClick={() => decrement()} className="btn btn-danger me-2 ">-</button>
            <button onClick={reset} className="btn btn-secondary ">Reset</button>
        </>
    )
}

export default CounterWithCustomHook;
