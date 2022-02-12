import React from 'react';
import Navigation from './Navigation';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from "./Home"
import Services from "./Services"
import Product from "./Product"
import Contect from "./ContectUs"
const Landing = () => {
    return (
        <div>
            <h1>LANDING</h1>

            {/* <BrowserRouter>
            <Navigation/>
            <Routes>
             <Route path ="/"element ={<Home/>} />
             <Route path ="Product"element ={<Product/>}/>
             <Route  path ="Services"element ={<Services/>} />
             <Route  path ="ContectUs"element ={<Contect/>}/>
            </Routes>
            </BrowserRouter> */}
        </div>
    );
};

export default Landing;