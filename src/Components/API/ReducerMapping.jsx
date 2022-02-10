import React from 'react';
import { useReducer } from 'react';

export const initialState ={
    allData: [
        { title: "Hulk", rating: 1, year:2001},
        { title: "ironmen", rating: 2, year:2002},
        { title: "loki", rating: 3, year:2003},
        { title: "superman", rating: 4, year:2004},
    ],
    added:[],
};
export const reducer =(state, action) =>{
    if(action.type==="add to Cart"){
        return{...state,added:[...state.added,action.data] };
    }
}

const ReducerMapping = () => {
    
    const [getState,dispatch]= useReducer(reducer, initialState);
    return (
        <div>
            <h1> REDUCER MAPPING </h1>
            
            {getState.allData.map((item)=>{
                return(
                        <div>
                        <h1> {item.title}</h1>
                        <h2> {item.rating}</h2>
                        <h4> {item.year}</h4>
                        <button onClick={()=> dispatch({type:"add to Cart",data:item})}>add to Cart</button>
                        </div>
                )
            })}
                        <h1> RD MAP</h1>
                        {getState.added.map((item)=>{
                            return(
                                <div>
                                <h1> {item.title}</h1>
                                <h2> {item.rating}</h2>
                                <h4> {item.year}</h4>
                                </div>

                            )
                        })}
                       

        </div>
    );
};

export default ReducerMapping;