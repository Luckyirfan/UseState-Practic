import React,{useState,useCallback} from 'react';
import { Button } from 'react-bootstrap';
import Buttons from './Button';
import Title from './Title';
import Value from './Value';

const Home = () => {
    const [age, setAge]=useState(18);
    const [income,setIncome]=useState(10000);
    const handleAge = useCallback(()=>{
        setAge(age + 1);
    }) 
    const handleIncome = useCallback(()=>{
        setIncome(income + 5000);
    },[income])
    // const handleAge = ()=>{
    //     setAge(age + 1);
    // };
    
    // const handleIncome = ()=>{
    //     setIncome(income + 5000);
    // };
    
    return (
        <div>
            <h1>this is Home</h1>
            <Title/>
            <Value text = "age" count ={age} />
            <Buttons handleFunctions={handleAge}>Add Age</Buttons>
            <Value text = "income" count ={income} />
            <Buttons handleFunctions={handleIncome}>Add Income</Buttons>
            
        </div>
    );
};

export default Home;