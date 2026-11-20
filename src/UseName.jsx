import react, { useState } from 'react';

function UseName() {

    const [name, setName] = useState("Guest");

    let greet = () =>{
        setName("spongebob");
    }

    return(
        <> <div>
            
            <h1>hello {name}!</h1>
            <button onClick={greet}> Say Hello</button>

           </div> </>
    );

}

export default UseName;