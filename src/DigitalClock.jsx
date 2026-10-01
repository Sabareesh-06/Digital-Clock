// import { useState, useEffect } from "react";

// function DigitalClock(){

//     const [time, setTime] = useState(new Date())

//     useEffect(() =>{
//         const interValid = setInterval(()=>{

//         },1000);

//         return()=>{
//             clearInterval(interValid);
//         }
//     },[]);
    
//     function formatTime(){
//         let hours = time.getHours();
//         let minutes = time.getMinutes();
//         let seconds = time.getSeconds();

//         const meridian = hours >= 12 ? "PM" : "AM";

//         hours = hours%12 || 12;

//         const padZero = (num) => (num < 10 ? `0${num}` : num);

//         return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridian}`;
//     }
//     return(
//         <div className="clock-container">
//             <div className="clock">
//                 <span>{formatTime()}</span>
//             </div>
//         </div>
//     );
// }

// export default DigitalClock;

import { useState, useEffect } from "react";

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // Starts the continuous ticker loop
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleans up interval when component unmounts
        return () => clearInterval(intervalId);
    }, []); // Empty array ensures timer runs setup only ONCE on mount

    function formatTime() {
        return time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        });
    }

    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default DigitalClock;