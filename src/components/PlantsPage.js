import React , { useEffect, useState } from 'react'
import Favorites from './Favorites';
import PlantCard from './PlantCard';
import Header from './Header';


//DO WE NEED A CONTAINER ON PLANTSPAGE FOR ALL THE PLANTS?
const PlantsPage =()=>{
      //console.log("In PlantsPage")
   
const [plants, setPlants] = useState([])
        console.log("State of our plants[ ", plants, " ]")
const [favePlants, setFavePlants] = useState( [] )
        console.log("State Fave Plants:", favePlants)
        

useEffect(()=> {
    fetch("http://localhost:3000/plants")
    .then(response => response.json())
    .then(fetchedPlants => {
        //console.log("From Fetch:", fetchedPlants)
        
        setPlants(fetchedPlants)
        
    });
}, [])



    
const addToFavoritesPage=(clickedPlant)=> {
   let duplicatePlant = favePlants.find (eachFavedPlant=>
        eachFavedPlant.id === clickedPlant.id)

        if(!duplicatePlant){
            setFavePlants([...favePlants, clickedPlant])
        }
}
    
    return(<>
    
        <h2></h2>
        {
            plants.map(eachPlant =>{ //console.log(eachPlant) 
            
                return(<h4> <PlantCard key={eachPlant.id}
                            eachPlant={eachPlant}
                           
                            /> </h4>)
            })
        }
        {
            <Favorites plantsToMap={plants}
            addToFavoritesPage={addToFavoritesPage}
           
            />
        }
     
    </>)


}
export default PlantsPage;