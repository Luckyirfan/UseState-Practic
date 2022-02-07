import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Parent } from './Components/Parent';
import Landing from './Components/Routing/Landing';
import ProductList from "../src/Components/ClassComponent/Products/ProductList"
const App = () => {
  return (
    <div className='Main'>
      <div>
      {/* <h1>App.js</h1> */}
      <Parent/>
      <Landing/>
      <ProductList/>
       </div>
    </div>
  );
};

export default App;
