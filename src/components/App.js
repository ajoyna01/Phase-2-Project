
import PlantsPage from './PlantsPage';
import Favorites from './Favorites';
import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import {NavLink} from "react-router-dom";
import Header from './Header';





function App() {
  // Parent Component


  
  // < App />
  //   L>  <Header />
  //     L>  < SubHeader />
//////// Ideally - Vanilla JavaScript

  
  return (<>
  PLEASE DON'T KILL ME!
  <Header />
  {/* <Switch> */}
    {/* <Route path="/">
    <PlantsPage />
      </Route>
  
  
   */}
  <PlantsPage />
  <Favorites /> 
  {/* </Switch>
     */}
    </>);


  ////////



}
export default App;
