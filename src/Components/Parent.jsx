import React, { useState } from 'react';
import { Chail1 } from './Chail1';
import { Button,Input } from 'react-bootstrap';

export const Parent = () => {
const [text,setText]= useState("");
const [text1,setText1]= useState("");
const [text2,setText2]= useState("");



    return (
        <div>
            First Name : <input type="text" onChange={(elem)=>{setText(elem.target.value)} } />
           Meddel Name : <input type="text" onChange={(elem)=>{setText1(elem.target.value)} } />
           Last Name : <input type="text" onChange={(elem)=>{setText2(elem.target.value)} } />
            
            <h1 > </h1>
            <Button> Click Me </Button>
        </div>
    );
};
