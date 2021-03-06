import React from 'react';
import { useReducer } from 'react';

export const initialState ={
    allData: [
        { title: "Hulk",
        img:"https://i.ytimg.com/vi/MAfIvBgChjQ/maxresdefault.jpg",
         rating: 1, year:2001},
        { title: "ironmen",
        img:"https://www.thewrap.com/wp-content/uploads/2021/08/Robert-Downey-Jr-Iron-Man.jpg",
         rating: 2, year:2002},
        { title: "loki",
        img:"data:image/jpeg;base64,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",
        rating: 3, year:2003},
        { title: "superman",img:"https://images.indianexpress.com/2020/08/superman-1200.jpg",
         rating: 4, year:2004},
    ],
    added:[],
};
export const reducer =(state, action) =>{
    if(action.type==="ADD TO CART"){
        return{...state,added:[...state.added,action.data] };
    }
}

const ReducerMapping = () => {
    
    const [getState,dispatch]= useReducer(reducer, initialState);
    return (
        <div>
           
             <h1> ADD TO CART</h1>
              {getState.added.map((item)=>{
                  return(
                      <div>
                     <h1> {item.title}</h1>
                     <img src={item.img} alt="" />
                      <h2> {item.rating}</h2>
                     <h4> {item.year}</h4>
                     </div>

                            )
                        })}
                        <h1> REDUCER MAPPING </h1>
      {getState.allData.map((item)=>{
           return(
                <div>
                <h1> {item.title}</h1>
                <img src={item.img} alt="" />
                <h2> {item.rating}</h2>
                <h4> {item.year}</h4>
                <button onClick={()=> dispatch({type:"ADD TO CART",data:item})}>
                    add to Cart</button>
             </div>
                )
            })}
                       

        </div>
    );
};

export default ReducerMapping;