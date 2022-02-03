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
            elem.toLowerCase().includes(text.toLowerCase())
            );
            setList(filtered)
        },[text]);

    



    return (
        <div>
            <h1>{text}</h1>
            <Button>Search</Button>
            <input type="text"onChange={(elem)=> setText(elem.target.value)} />
            <ul>
            {list.map((days)=>{
                return <li>{days}</li>;
            })}
            </ul>
        </div>
    );
};

