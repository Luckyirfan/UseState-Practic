import React from 'react';
import { useSelector } from 'react-redux';

const FachDataRedux = () => {
  const selectorData =  useSelector((state)=>state.sampleReducer.myState);
  return (
    <div >
  
  {selectorData.map((itemCurrunt)=>{
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