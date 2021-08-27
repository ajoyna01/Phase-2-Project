import React , { useEffect, useState } from 'react'
import PlantCard from './PlantCard';
import Favorites from './Favorites';
import { BrowserRouter, Route } from 'react-router-dom';
import { light } from '@material-ui/core/styles/createPalette';
import { useHistory } from 'react-router';

const PlantsPage =()=>{
    //console.log("In PlantsPage")
    

    const [plants, setPlants] = useState([]);
            console.log("State of our plants[ ", plants, " ]")
        
    const [favePlants, setFavePlants] = useState([]);
        console.log("State of our favorites[ ", favePlants, " ]")

        useEffect(()=> {
        fetch("http://localhost:3000/plants")
        .then(response => response.json())
        .then(fetchedPlants => {
            console.log("From Fetch:", fetchedPlants)
            
            
            
            setPlants(fetchedPlants)
                     });
        }, [])
const history = useHistory();

/////// this function is not being read at all. A click event is happening but the logic is not read
//const favoritedPlantClickHandler=()=>{
  //console.log()

  
const addPlantToFavorites=(clickedPlant)=>{
        console.log(clickedPlant)//clicked plant is being read and assigned an id of whatever is next in db.json
        
    let duplicatePlant = favePlants.find( eachLikedPlant=>  //duplicatePlant=undefined
            eachLikedPlant.id === clickedPlant.id)
            //console.log(eachLikedPlant)
        
            if(!duplicatePlant){
            
           // setFavePlants( [...favePlants, clickedPlant] )
            console.log(clickedPlant)
            let objectToPost=clickedPlant
       
            fetch("http://localhost:3000/likedPlants", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(objectToPost)
            })
                .then((r) => r.json())
                .then((newFavePlants) => { ;
                console.log(newFavePlants)
                });
} }

    return(<>
    
        <h2>PLANTS</h2>
        {
            plants.map(eachPlant =>{ //console.log(eachPlant) 
            
                return(<h4> <PlantCard key={eachPlant.id}
                            eachPlant={eachPlant}
                            addPlantToFavorites={addPlantToFavorites}
                            //removePlantFromFavorites={removePlantFromFavorites}
                            /> </h4>)

            })
        }
    
     {/* {
            favePlants.map(eachPlant=> {
              console.log(eachPlant)
           return(
           <Favorites 
            plants={eachPlant}
            />)   
        })
        
    } */}
    {/* <BrowserRouter>
        <Route  path='/PlantsPage/Favorites' component={Favorites}/>
    </BrowserRouter> */}


     
    </>)


}
export default PlantsPage;