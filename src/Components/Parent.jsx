import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


export const Parent = () => {
const [name,setName]= useState("");
const [mname,setMname]= useState("");
const [lname,setLname]= useState("");
const [add,setAdd]= useState("");
      
       return (
        <div>
            <h1>PARANT COM</h1>
            First Name : <input type="text" onChange={(elem)=>{{setName(elem.target.value)}}} />
           Meddel Name : <input type="text" onChange={(elem)=>{{setMname(elem.target.value)}}} />
           Last Name : <input type="text" onChange={(elem)=>{{setLname(elem.target.value)}}} />
           Address : <input type="text" onChange={(elem)=>{{setAdd(elem.target.value)}} } />
            
            <h3 >{ name} { mname} {lname} {add}</h3>
            <Button> Click Me </Button>
            


        </div>
        
    );
};
