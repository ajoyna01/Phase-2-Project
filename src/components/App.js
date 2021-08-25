
import PlantsPage from './PlantsPage';
import TipsPage from './TipsPage';

import Favorites from './Favorites';

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Routes from './Routes';




function App() {
  // Parent Component

  
  // < App />
  //   L>  <Header />
  //     L>  < SubHeader />
//////// Ideally - Vanilla JavaScript

  
  return (<>
  {/* <PlantsPage />
  <Favorites />  */}
  <Routes />
  
  

    
    </>);


  ////////



}
export default App;
