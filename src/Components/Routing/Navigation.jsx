import React from 'react';
import { Link } from 'react-router-dom';
import { ClassCounter } from '../ClassComponent/ClassComponent';
import "./Navigation.css"

const Navigation = () => {
    return (
        <div className='Nav'>
            <h1 className='Hello'>Hello</h1>
             <Link to="./" className='key'>Home</Link>
             <Link to="Product"className='key'>Product</Link>
             <Link to="Services"className='key'>Services</Link>
             <Link to="ContectUs"className='key'>ContectUs</Link>
            
            <ClassCounter/>
              </div>
    );
};

export default Navigation;