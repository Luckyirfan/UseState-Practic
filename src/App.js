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
import { Search } from './Components/Search';
import { CounterWithReducer } from './Components/useReduser/ConterWithReducer';
import TestUseReducer from './Components/useReduser/TestUseReducer';

const App = () => {
  return (
    <div className='Main'>
      <div>
       
      <Parent/> 
      <Search/>  
      <CounterWithReducer/>
      <TestUseReducer/>
      <Landing/> 
      <ProductList/> 
      <FachingDataFromApi/> 
      <ReducerMapping/> 
      <PostData/>
      <FatchData/>
      <FachDataRedux/>
      <UseRefHooks/>
      <UseRefMuteble/>
      <UseRefTimer/>
      
       </div>
    </div>
  );
};

export default App;
