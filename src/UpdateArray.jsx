import react, { useState } from 'react';

function UpdateArray() {

    const [ foods, setFood ] = useState(["potato", "tomato", "banana", "mongo"]);

    function handleAddFood(){
        
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFood(f => [...f, newFood]);
    }

    function handleRemoveFood(index){

        setFood(foods.filter((_, i ) => i !== index));
    }



    return (
        <>
         <div>
            <h1>Your favorite foods</h1>
             <ul>
                {foods.map((food, index) => 
                <li key={index} onClick={() => handleRemoveFood(index)}>
                    {food}
                </li>)}
             </ul>

             <input type="text" id="foodInput" placeholder="Add Food Items"/>
             <button onClick={handleAddFood}>Add Food</button>
         </div>
        </>
    );
}

export default UpdateArray;