import React,{useReducer,useState} from 'react';


export const initialStateValue  ={
    counter :0,
};
export const reducer  = (state,action)  => {
    
    
    if ( action.type==="Increment"){
        return{ counter:state.counter+action.data};
    }
    if( action.type === "Decrement" ){
        return{counter: state.counter-action.data};
    }
    
};

const testReducer = () => {
    const[text,setText] = useState(0);
    const value = parseInt(text);
        
    const [currentState, dispatch] = useReducer(reducer, initialStateValue);
    return (
        <div>
            <h1> Hello reducer</h1>
            <h1> Current Count:{currentState.counter}</h1>
            <input type="number" onChange={(e)=> setText(e.target.value.toNumber())} />
            <button onClick={() =>dispatch({type:"Increment", data:text})} ></button>
            <button onClick={() =>dispatch({type:"Increment", data:text})}></button>
        </div>
    );
};

export default Reducer;