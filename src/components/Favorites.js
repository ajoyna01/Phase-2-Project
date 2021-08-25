import React from 'react'
import PlantCard from "./PlantCard"
import PlantsPage from './PlantsPage'

function Favorites(props) {
    console.log(props.plantsToMap)

const plantWasFavorited = (clickedPlant) => {
    console.log("From PlantCard:", clickedPlant)
   props.addToFavoritesPage(clickedPlant)
}


return (<div>
        <h2>🪴Your Windowsill☀️</h2>

{
    props.plantsToMap.map(eachPlant=> {
        console.log(eachPlant)
        return (<PlantCard eachPlant={eachPlant}/>)
    })
}
 {/* <PlantCard eachPlant={props.plantsToMap[1]}/> */}
 
     

                                                                    {/* I've tried everything to get this to render */}
  
    
    </div>)
} 



export default Favorites;