import React, { useState,useEffect }from 'react';
import Chail2 from './Chail2';

export const Chail1 = () => {
    const [text, setText] = useState()
    const [data, setData] = useState([])
    const handle = () => {
        setData([...data, text])
        document.getElementById("input").value = "";
        setText(" ");
    };
     return (
       
           <div>
               
             <h1>TO DO LIST</h1>
            <input type="text" id='input' onChange={(e) => { { setText(e.target.value) } }}  placholder="insert text" /> 
             <button onClick={handle} >Click me</button>
             <button >Reset</button>
             <ul>

             {data.map((text) => {
                              return (
                                  <li>
                                      <h1>{text}</h1>
                                  </li>
                              )
                          })};
             </ul>
         </div>
    )
    
      
        
    }
    


