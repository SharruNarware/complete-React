import react, { useState, useEfeect, useEffect } from "react";

function DigitalClock (){
    
    const [ time, setTime ] = useState();

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return() =>{
            clearInterval(intervalID);
        }
    }, []);


    function formateTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "pm" : "am";

        hours = hours % 12 || 12;

        return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}:${meridiem}`;
    }``

    function addZero(num){
        return( num < 10 ? "0" : "") + num;
    }

    return (
        <>
        <div className="clock-container">
            <div className="clock">
                <span>{formateTime()}</span>
            </div>
        </div>
        </>
    );
}
 
export default DigitalClock;