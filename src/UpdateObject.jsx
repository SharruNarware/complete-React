import react, {useState} from "react";

export default function UpdateObject(){

    const [car, setCar] = useState({"year": 2020, 
                                    "make": "ford", 
                                    "model": "mustang"});


    let handleYearChange = (event) =>{
        setCar(c => ({...c, year: event.target.value}));
    }

    let handleMakeChange = (event) =>{
        setCar(c => ({...c, make: event.target.value}));
    }

    let handleModelChange = (event) =>{
        setCar(c => ({...c, model: event.target.value}));
    }

    return (
        <>
          <div>
             <h2>Your favorite car: {car.year} {car.make} {car.model}</h2>
             <input type="number" value={car.year} onChange={handleYearChange}/>
             <input type="text" value={car.make} onChange={handleMakeChange}/>
             <input type="text" value={car.model} onChange={handleModelChange}/>
          </div>
        </>
    );
}