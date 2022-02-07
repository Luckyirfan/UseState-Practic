import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Parent } from './Components/Parent';
import Landing from './Components/Routing/Landing';
import ProductList from "../src/Components/ClassComponent/Products/ProductList"
import FachingDataFromApi from "./Components/API/FachingDataFromApi"
const App = () => {
  return (
    <div className='Main'>
      <div>
      {/* <h1>App.js</h1> */}
      <Parent/>
      <Landing/>
      {/* <ProductList/> */}
      <FachingDataFromApi/>
       </div>
    </div>
  );
};

export default App;
