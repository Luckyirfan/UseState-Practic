import React from 'react';
import { useSelector } from 'react-redux';
const FachDataRedux = () => {
  const selector =  useSelector((state)=>state.sampleReducer.myState);
  return (
    <div >
  
  {selector.map((itemCurrunt)=>{
      return(
          <div kye= {itemCurrunt.id} >
        <h3>Name:{itemCurrunt.name}</h3>
        
        
        
        <img src={itemCurrunt.Image } style={{ weight:"300px", height:"300px"}} alt="" />
        
        <p>Desc:{itemCurrunt.Desc}</p>
        </div>
     
     );

    })}
     </div>
    
     );
 };
    
      
  
    
            
 

export default FachDataRedux;