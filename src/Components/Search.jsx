import React, { useState,useEffect } from 'react';
import { Button } from 'react-bootstrap';

export const Search = () => {
    const days = [
        "Monday","Tusday","Wednesday","Thusday","Friday","Suterday","Sunday"
    ];
    const [list,setList]= useState(days);
    const [text,setText]=useState("")
    
        useEffect(() => {
            const filtered =days.filter((elem)=>
            elem.toLowerCase().includes(text.toLowerCase()) );
            setList(filtered)
 },[text]);

    



    return (
        <div>
            <h1>SEARCH COM</h1>
            <h1>{text}</h1>
            <input type="text"onChange={(elem)=> setText(elem.target.value)} />
            <Button >Search</Button>
            <ul>
            {list.map((days)=>{
                return <li>{days}</li>;
            })}
            </ul>
        </div>
    );
};

