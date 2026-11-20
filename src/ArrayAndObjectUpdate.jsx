import react, { useState } from "react";

function ArrayAndObjectUpdate() {

    const [ cars, setCars ] = useState([]);
    const [ carYear, setCarYear ] = useState(new Date().getFullYear());
    const [ carMake, setCarMake ] = useState("");
    const [ carModel, setCarModel ] = useState("");


    function handleAddCar(){
          
        const  newCar = {year: carYear,
                         make: carMake, 
                         model: carModel};

        setCars(c => [...c, newCar]);   
        
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index){
        setCars(cars => cars.filter((_, i) => i !== index));
    }

    function handleYearChange(event){
        setCarYear(event.target.value);
    }

    function handleMakeChange(event){
        setCarMake(event.target.value);
    }

    function handleModelChange(event){
        setCarModel(event.target.value);
    }


    return (
          <>
          <div className="container">
              <h2>List of Car Objects</h2>
              <ui>
                {cars.map((car, index) =>
                   <li key={index} onClick={() => handleRemoveCar(index)}>
                     {car.year} {car.make} {car.model}
                   </li> )}
              </ui>

              <input type="number" value={carYear} onChange={handleYearChange} />
              <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car Make"/>
              <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car Model"/>
              <button onClick={handleAddCar}>Add Car</button>

          </div>
          </>
    );
}

export default ArrayAndObjectUpdate;