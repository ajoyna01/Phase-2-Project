import React , { useEffect, useState } from 'react'
import PlantCard from './PlantCard';
import Favorites from './Favorites';
import { BrowserRouter, Route } from 'react-router-dom';

const PlantsPage =()=>{
      console.log("In PlantsPage")
    //   console.log(json)


const [plants, setPlants] = useState([])
        console.log("State of our plants[ ", plants, " ]")
       
const [favePlants, setFavePlants] = useState([])
    console.log("State of our favorites[ ", favePlants, " ]")

    useEffect(()=> {
    fetch("http://localhost:3000/plants")
    .then(response => response.json())
    .then(fetchedPlants => {
        console.log("From Fetch:", fetchedPlants)
        
        
        
        setPlants(fetchedPlants)
    });
}, [])
  
const addPlantToFavorites=(clickedPlant)=>{
    let duplicatePlant = favePlants.find( eachLikedPlant=>
        eachLikedPlant.id === clickedPlant.id)

    if(!duplicatePlant){
        setFavePlants( [...favePlants, clickedPlant])
    }
}

const removePlantFromFavorites=(clickedOffPlant)=>{
    
    let removedPlantFromFaves = favePlants.filter (eachLikedPlant=>
        eachLikedPlant.id !== clickedOffPlant.id)
        setFavePlants([...removedPlantFromFaves])
}
    return(<>
    
        <h2>PLANTS</h2>
        {
            plants.map(eachPlant =>{ //console.log(eachPlant) 
            
                return(<h4> <PlantCard key={eachPlant.id}
                            eachPlant={eachPlant}
                            addPlantToFavorites={addPlantToFavorites}
                            removePlantFromFavorites={removePlantFromFavorites}
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