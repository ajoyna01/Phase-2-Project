import React from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import {Link} from "react-router-dom";
import Favorites from './Favorites';
import Header from './Header';
import PlantsPage from './PlantsPage';
import Home from './Home';
import TipsPage from './TipsPage';




const Routes = () => {
     return (
    <BrowserRouter>
    <Header/>
    <nav className="nav-links">
        <span><Link to= "/" > Home </Link></span>
        <span><Link to='/TipsPage'> Tips For Plant Success </Link></span>
        <span><Link to='/PlantsPage'> Plants </Link></span>
        <span><Link to='Favorites'>   Plant Favorites   </Link></span>
    </nav>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/TipsPage' component={TipsPage}/>
            <Route exact path='/PlantsPage' component={PlantsPage}/>
            <Route exact path='/Favorites' component={Favorites}/>
        </Switch>
        {/* <PlantsPage/> */}
       
        
    </BrowserRouter>
);
 };

 export default Routes;