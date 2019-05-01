import React from 'react';

const Counter = ({ counter, increment, decrement }) => {
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button className="increment-counter" onClick={increment}>Increment</button>
            <button className="decrement-counter" onClick={decrement} >Decrement</button>
        </div>
    )
}

export default Counter;