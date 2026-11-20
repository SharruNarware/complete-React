import React, { useState } from 'react';

export default function PLusMinus() {
    const [number, setNumber] = useState(0);

    const decrease = () => {
        setNumber(number - 1)
    } 

    const increase = () => {
        setNumber(number + 1)
    } 

    const reset = () => {
        setNumber(0)
    } 

    return(
         <>
            <div className="counter-container">
                <h1 className="counter-display">{number}</h1>
                <button className="decrease-btn" onClick={decrease}>Decrease</button>
                <button className="increase-btn" onClick={increase}>Increase</button>
                <button className="reset-btn" onClick={reset}>Reset</button>
            </div>
         </>
    )
}