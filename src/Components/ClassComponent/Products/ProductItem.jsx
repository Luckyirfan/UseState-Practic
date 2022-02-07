import React from 'react';
import "./ProductItem.css"

const ProductItem = (props) => {
    
    return (
        <div className='proditem'>
            <h4>{props.item.title}</h4>
            <img src={props.item.image} alt="" />
            <p> {props.item.price}</p>
            <p>{props.item.discription} </p>
            
        </div>
    );
};

export default ProductItem;