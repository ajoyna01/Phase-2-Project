import React , { useEffect, useState } from 'react'
import Favorites from './Favorites';
import PlantCard from './PlantCard';
import Header from './Header';



const PlantsPage =()=>{
      //console.log("In PlantsPage")
   
const [plants, setPlants] = useState([])
        //console.log("State of our plants[ ", plants, " ]")
        

useEffect(()=> {
    fetch("http://localhost:3000/plants")
    .then(response => response.json())
    .then(fetchedPlants => {
        //console.log("From Fetch:", fetchedPlants)
        
        setPlants(fetchedPlants)
    });
}, [])
    
    
return(<>
        {
            <Header/>
        }
        <h2>FETCHING :)</h2>
        {
            plants.map(eachPlant =>{ //console.log(eachPlant) 
            
                return(<h4> <PlantCard key={eachPlant.id}
                            eachPlant={eachPlant}
                            /> </h4>)
            })
        }
        {
            <Favorites plants={plants}/>
        }
     
    </>)


}
export default PlantsPage;