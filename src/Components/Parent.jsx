import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


export const Parent = () => {
const [name,setName]= useState("");
const [mname,setMname]= useState("");
const [lname,setLname]= useState("");
const [add,setAdd]= useState("");
      
       return (
        <div>
            <form>
            <h1>PARANT COM</h1>
            First Name : <input type="text" onChange={(elem)=>{{setName(elem.target.value)}}} placeholder="First Name" />
           Meddel Name : <input type="text" onChange={(elem)=>{{setMname(elem.target.value)}}}placeholder="Meddel Name" />
           Last Name : <input type="text" onChange={(elem)=>{{setLname(elem.target.value)}}}placeholder="Last Name" />
           Address : <input type="text" onChange={(elem)=>{{setAdd(elem.target.value)}} }placeholder="Address" />
    
             <div>
            <h3 > Name         :{name} <br />
                  Meddel Name  :{mname} <br />
                  Last Name    :{lname} <br />
                  Address      :{add}</h3>

            <input type="reset" value="Reset" />
            <input type="submit" value="Submit" />
            </div>
            </form>
            


        </div>
        
    );
};
