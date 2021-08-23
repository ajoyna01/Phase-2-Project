import { useEffect, useState } from 'react'




const PlantsPage =()=>{
      console.log("In PlantsPage")


    const [plants, setPlants] = useState([])
        console.log("State of our plants[ ", plants, " ]")


        const fetchPlants=()=>{ console.log("In useEffect") 

            fetch('http://www.quantitative-plant.org/api?type=TYPE&field=FIELD&q=Q')
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
            
                return(<h4>{eachPlant.name}</h4>)

            })
        }
        {/* {critters.map(eachCritter =>{ console.log(eachCritter) })} */}
    
    </>)


}
export default PlantsPage