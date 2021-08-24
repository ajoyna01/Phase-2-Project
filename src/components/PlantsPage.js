import React , { useEffect, useState } from 'react'
import PlantCard from './PlantCard';




const PlantsPage =()=>{
      console.log("In PlantsPage")
    //   console.log(json)


    const [plants, setPlants] = useState([])
        console.log("State of our plants[ ", plants, " ]")
        


        const fetchPlants=()=>{ console.log("In useEffect") 

<<<<<<< HEAD
            fetch('http://localhost:3000/plants')
=======
            fetch('')
>>>>>>> 5a0afbbdb0cd30b568a432c51c03b669690e3c6a
            .then(response => response.json())
            .then(data => { console.log("From Our Fetch:  ", data) 
            
                setPlants(data)
            
            });

        }


    useEffect( fetchPlants(), [] )
    
    
    return(<>
    
        <h2>FETCHING :)</h2>
        {
            plants.map(eachPlant =>{ console.log(eachPlant) 
            
                return(<h4> <PlantCard key={eachPlant.name}/> </h4>)

            })
        }
        {/* {critters.map(eachCritter =>{ console.log(eachCritter) })} */}
    
    </>)


}
export default PlantsPage;