import React, { useState } from 'react';
import { Chail1 } from './Chail1';
import { Button,Input } from 'react-bootstrap';
import { Search } from './Search';
import {CounterWithReducer} from "./useReduser/ConterWithReducer"
export const Parent = () => {
const [text,setText]= useState("");
const [text1,setText1]= useState("");
const [text2,setText2]= useState("");
const [add,setAdd]= useState("");



    return (
        <div>
            First Name : <input type="text" onChange={(elem)=>{setText(elem.target.value)} } />
           Meddel Name : <input type="text" onChange={(elem)=>{setText1(elem.target.value)} } />
           Last Name : <input type="text" onChange={(elem)=>{setText2(elem.target.value)} } />
           Address : <input type="text" onChange={(elem)=>{setAdd(elem.target.value)} } />
            
            <h3 >{ text+" "+text1+" "+text2+" "+add} </h3>
            <Button> Click Me </Button>

            <Search/>
            <CounterWithReducer/>

        </div>
        
    );
};
