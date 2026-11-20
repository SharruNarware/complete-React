import react, { useState, useEffect } from "react";

function UseEffect() {

    const [ count, setCount ] = useState(0);
    const [ color, setColor ] = useState("pink");

    useEffect(() => {
        document.title = `Count is: ${count}`;

        return () =>{
            document.title = "React New App";  // cleanup function to reset the title when the component unmounts...
        }
    },[count]);

    function handleAddChange(){
        setCount(c => c + 1);
    } 

    function handleSubtractChange(){
        setCount(c => c - 1);
    }

    function handleColorChange(){
        setColor (color => color === "pink" ? "green" : "red");    }

    return (
        <>
        <div>
            <h1 style={{color: color}}>Count is: {count}</h1>
            <button onClick={handleAddChange}>increase count</button>
            <button onClick={handleSubtractChange}>decrease count</button>
            <button onClick={handleColorChange}>change color</button>
        </div>
        </>
    );

}

export default UseEffect;