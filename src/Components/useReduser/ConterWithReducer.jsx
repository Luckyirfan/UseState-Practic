import React,{useReducer} from 'react';
export const initialState={
    counterOne: 0,
    counterTwo: 10,
};
export const reducer = (state,action)=>{
if(action.type==="Increment"){
    return{counterOne:state.counterOne+5}
};
if (action.type=== "Decrement"){
    return {counterOne:state.counterOne-5}
}
};
export const reducer1 = (state,action)=>{
if(action.type==="Increment"){
    return{counterTwo:state.counterTwo+10}
};
if (action.type=== "Decrement"){
    return {counterTwo:state.counterTwo=0}
}
};
 export const CounterWithReducer = () => {
    const [count,dispatch] = useReducer(reducer,initialState);
    const [count1,dispatch1] = useReducer(reducer1,initialState);
    return (
        <div>
            <h1>hello usereducer</h1>
            <h1>counterOne: {count.counterOne}</h1>
            <button onClick={()=>dispatch({type: "Increment"})} >IncrementcounterOne</button>
            <button onClick={()=>dispatch({type: "Decrement"})}>DecrementcounterOne </button>
            <h2>counterTwo : {count1.counterTwo} </h2>
            <button onClick={()=>dispatch1({type: "Increment"})} >IncrementcounterTwo</button>
            <button onClick={()=>dispatch1({type: "Decrement"})}>IncrementcounterTwo</button>
        </div>
    );
};
