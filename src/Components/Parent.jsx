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
            First Name : <input type="text" onChange={(elem)=>{{setName(elem.target.value)}}} />
           Meddel Name : <input type="text" onChange={(elem)=>{{setMname(elem.target.value)}}} />
           Last Name : <input type="text" onChange={(elem)=>{{setLname(elem.target.value)}}} />
           Address : <input type="text" onChange={(elem)=>{{setAdd(elem.target.value)}} } />
    
             <div>
            <h3 > Name         :{uppercase,name} <br />
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
