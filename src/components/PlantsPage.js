import React , { useEffect, useState } from 'react'
import PlantCard from './PlantCard';




const PlantsPage =()=>{
      console.log("In PlantsPage")
    //   console.log(json)


    const [plants, setPlants] = useState([])
        console.log("State of our plants[ ", plants, " ]")
        

<<<<<<< HEAD

        const fetchPlants=()=>{ console.log("In useEffect") 

            fetch('http://localhost:3000/plants')
            .then(response => response.json())
            .then(data => { console.log("From Our Fetch:  ", data) 
=======
useEffect(()=> {
    fetch("http://localhost:3000/plants")
    .then(response => response.json())
    .then(fetchedPlants => {
        console.log("From Fetch:", fetchedPlants)
        
        
        
        setPlants(fetchedPlants)
    });
}, [])
    // const fetchPlants=()=>{ console.log("In useEffect") 

    //         fetch('http://localhost:3000/plants')
    //         .then(response => response.json())
    //         .then(data => { console.log("From Our Fetch:  ", data) 
>>>>>>> de508adde4f40bc1d08f1041ee23f3b7c0a1d8bb
            
    //             setPlants(data)
            
    //         });

    //     }


    // useEffect( fetchPlants(), [] )
    
    
    return(<>
    
        <h2>FETCHING :)</h2>
        {
            plants.map(eachPlant =>{ console.log(eachPlant) 
            
                return(<h4> <PlantCard key={eachPlant.id}
                            eachPlant={eachPlant}
                            /> </h4>)

            })
        }
        {/* {critters.map(eachCritter =>{ console.log(eachCritter) })} */}
     
    </>)


}
export default PlantsPage;