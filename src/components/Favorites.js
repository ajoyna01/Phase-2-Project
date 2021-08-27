import { useState, useEffect } from 'react'


function Favorites() {
    console.log()

    const [favePlants, setFavePlants] = useState([])
    console.log("State of our favorites[ ", favePlants, " ]")

    useEffect(()=> {
    fetch("http://localhost:3000/likedPlants")
    .then(response => response.json())
    .then(fetchedPlants => {
        console.log("From Fetch:", fetchedPlants)
    
        setFavePlants(fetchedPlants)
    });
}, [])

return (
<div>
    <h2>Your Windowsill☀️</h2>
    {favePlants.map(eachPlant =>
        { console.log(eachPlant)
        return(
            <>
            <div className="main plant card div">
                <div className="plant card"
                    key={eachPlant.id}>
                    <div className="image">
                        <img src={eachPlant.img} alt="picture of a plant" />
                    </div>
                    <div className="plants specs">
                        <div className="plant name">
                           <h2>{eachPlant.name} </h2> 
                        </div>
                        <div className="plant water">
                            <h3> Water: {eachPlant.water}</h3>
                        </div>
                        <div className="plant light">
                            <h3> Light: {eachPlant.light} </h3>
                        </div>
                        <div className="plant description">
                            <h4> Description: {eachPlant.description}</h4>
                        </div>
                    </div>
                </div>

            </div>
            </>
        )
        
        
        
        })}
</div>
)
} 

export default Favorites;