import React,{useEffect,useState} from 'react';
import axios from 'axios';

const FachingDataFromApi = () => {
    const[data,setData]= useState([]);

    const getPostDetail1 = async()=> {
        const result = await axios.get("http://localhost:3000/Products")
  setData(result.data);
    };
    useEffect (()=>{
        getPostDetail1();
    },[]);

    return (
        <div>
            <h1>FACHING DATA FROM API</h1>

            {data.map((myData)=>{
                return(

                    <div key={myData.id}>
                    {/* <img src={props.item.image} alt="" /> */}
                    <h4>{myData.title}</h4>
                    <p>{myData.body}</p>
                    </div>
               
               );})}
            
            
            
           
        </div>
    );
};

export default FachingDataFromApi;