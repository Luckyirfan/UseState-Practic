import React, { useState } from 'react';
import { Chail1 } from './Chail1';
import { Button,Input } from 'react-bootstrap';
import { Search } from './Search';
import {CounterWithReducer} from "./useReduser/ConterWithReducer"
export const Parent = () => {
const [text,setText]= useState({});
      
       return (
        <div>
            First Name : <input type="text" onChange={(elem)=>{{name:setText(elem.target.value)}}} />
           Meddel Name : <input type="text" onChange={(elem)=>{{Meddel:setText(elem.target.value)}}} />
           Last Name : <input type="text" onChange={(elem)=>{{Last:setText(elem.target.value)}}} />
           Address : <input type="text" onChange={(elem)=>{{Address:setText(elem.target.value)}} } />
            
            <h3 >{ text.name} { text.Meddel} { text.Last}{ text.Address}</h3>
            <Button> Click Me </Button>

            <Search/>
            <CounterWithReducer/>

        </div>
        
    );
};
