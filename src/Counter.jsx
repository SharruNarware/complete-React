import { useState } from "react";


export default function Counter(){
    let [ count, setCount ] = useState(0);

    function intcount (){
        // setCount(count + 2);   //normal useState method..!

        //callbacks in useState..!
        setCount ((currCount) => {
           return  currCount + 1;
        })

        setCount ((currCount) => {
           return  currCount + 1;
        })
    }

    return(
        <div>
            <h3>Count = {count}</h3>
            <button onClick={intcount}>incease counting</button>
        </div>
    )
}