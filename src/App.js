import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Parent } from './Components/Parent';
import Landing from './Components/Routing/Landing';
const App = () => {
  return (
    <div className='Main'>
      <div>
      <h1>App.js</h1>
      <Parent/>
      
       <Landing/>
       </div>
    </div>
  );
};

export default App;
