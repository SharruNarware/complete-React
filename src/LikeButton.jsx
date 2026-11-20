import { useState } from "react";

export default function LikeButton(){
    let [ isLike, setIsLike ] = useState(false);

    let toggleLike = () =>{
        setIsLike(!isLike);
        // let newVal = !isLike;
        // isLike = newVal;
        
    }

    return (
        <>
        <p onClick={toggleLike}>
           
            { isLike ? ( <i style={{color: "red"}} className="fa-solid fa-heart"></i> ) : ( <i style={{color: "white"}} className="fa-regular fa-heart"></i> ) }

        </p>
        </>
    )
}

