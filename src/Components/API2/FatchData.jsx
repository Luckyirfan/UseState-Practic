import React,{useEffect,useState} from 'react';
import axios from 'axios';

const FatchData = () => {
 const [apiData,setApiData] = useState([]);
    const getPosts = async()=>{
    const result=await axios.get("http://localhost:3000/Products");
   console.log(result.data);
    setApiData(result.data)

    
    };
 useEffect(() => {
    getPosts(); 
 }, []);
    
    return (
        <div>
            <h1>FATCH DATA</h1>
            { apiData.map((items)=>{
                return(
                    <div>
                        
                    <h2>{items.title}</h2>
                    <p> {items.desc}</p>
                    </div>

                )
            })}
           
        </div>
    );
};

export default FatchData;