import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Parent } from './Components/Parent';
import Landing from './Components/Routing/Landing';
import ProductList from "../src/Components/ClassComponent/Products/ProductList"
import FachingDataFromApi from "./Components/API/FachingDataFromApi"
import ReducerMapping from './Components/API/ReducerMapping';
import FatchData from "./Components/API2/FatchData"
import PostData from './Components/API2/PostData';
import FachDataRedux from './Components/ReduxFachData/FachDataRedux';
import UseRefHooks from './Components/Hooks/UseRefHooks';
import UseRefMuteble from "./Components/Hooks/UseRefMuteble"
import UseRefTimer from './Components/Hooks/UseRefTimer';
import {NavReduser} from "./Components/useReduser/NevReduser"

const App = () => {
  return (
    <div className='Main'>
      <div>
      {/* <h1>App.js</h1> */}
      {/* <Parent/>
      <Landing/> */}
      {/* <ProductList/> */}
      {/* <FachingDataFromApi/> */}
      {/* <ReducerMapping/> */}
      <PostData/>
      <FatchData/>
      <FachDataRedux/>
      <UseRefHooks/>
      <UseRefMuteble/>
      <UseRefTimer/>
      <NavReduser/>
       </div>
    </div>
  );
};

export default App;
