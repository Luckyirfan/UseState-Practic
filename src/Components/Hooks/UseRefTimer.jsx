import React,{useState,useEffect,useRef} from 'react';

const UseRefTimer = () => {
    const [timer, setTimer]= useState(0);
    const [timer1, setTimer1]= useState(0);
    const [timer2, setTimer2]= useState(0);
    const refValue= useRef(null);
    useEffect(()=>{
        refValue.current=  setTimeout(()=>{
setTimer(timer+1)
setTimer1(timer1+2)
setTimer2(timer2+3)
        },1000)

    },[timer+1,timer1+2,timer2+3])
    return (
        <div>
            <h1>Time:{timer}</h1>
            <h1>Time:{timer1}</h1>
            <h1>Time:{timer2}</h1>
        </div>
    );
};

export default UseRefTimer;