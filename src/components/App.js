
import PlantsPage from './PlantsPage';

import Favorites from './Favorites';

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  // Parent Component

  
  // < App />
  //   L>  <Header />
  //     L>  < SubHeader />
//////// Ideally - Vanilla JavaScript

  
  return (<>
  <PlantsPage />
  <Favorites /> 

    
    </>);


  ////////



}
export default App;
