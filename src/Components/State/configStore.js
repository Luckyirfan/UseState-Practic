import {createStore, combineReducers} from "redux";
import { sampleReducer } from "./Reducers/sampileReducer";

export const configStore =()=>{
     const store = createStore(combineReducers({ sampleReducer}),
     
   window.__REDUX_DEVTOOLS_EXTENSION__&&
   window.__REDUX_DEVTOOLS_EXTENSION__()
     );
     return store;
};