import React, { useEffect,useState } from 'react';
import ProductItem from './ProductItem';
import axios from 'axios';

const ProductList = () => {
    const [data, setData]= useState([]);
    const getProduct = async ()=>{
        const result = await axios.get("https://fakestoreapi.com/products");
        setData(result.data);
    };
useEffect (()=>{
    getProduct();
    
},[]);

    return (
        <div className='prodlist' >
         <h1>PRODUCT LIST</h1>
            {data.map((items)=>{
                return(
                    <ProductItem item={items} key={items.id}/>
             ) })}
            
        </div>
    );
};

export default ProductList;