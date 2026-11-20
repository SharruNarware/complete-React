import react, { useState } from "react";


export default function ColorPicker() {

    const [ color, setcolor ] = useState("#ffffff")

    let handleColorChange = (event) =>{
        setcolor(event.target.value);
    }

    return(
        <>
        <div className="color-picker-container">
            <h1>color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <lable>Select a color:</lable>
             <input type="color" value={color} onChange={handleColorChange} />
        </div>
        </>
    );
}