
import PlantsPage from './PlantsPage';
import React, { BrowserRouter, Route } from 'react-router-dom';
import Favorites from './Favorites'



function App() {
  // Parent Component

  
  // < App />
  //   L>  <Header />
  //     L>  < SubHeader />
//////// Ideally - Vanilla JavaScript

  
  return (<>

    <BrowserRouter>
      <Route path="/plants" component={<PlantsPage/>}>
    <h1>Should see all the time </h1>
      </Route>
    
    </BrowserRouter>

    
    </>);


  ////////



}
export default App;
