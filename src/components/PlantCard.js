import {useState} from "react";

function PlantCard( props ){
  console.log("Plant Card", props)

  const [likedPlants, setLikedPlants] = useState([])
    //console.log(likedPlants)
 
  const handleLikes=(plantToLikeAtDB)=> {
   fetch(`https://localhost:3000/plants/${plantToLikeAtDB.id}`,
   {  method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(likedPlants)
    })
  let likedPlantsInFavorites=likedPlants.filter(eachLikedPlant=>
    eachLikedPlant.id === plantToLikeAtDB)

    setLikedPlants([...likedPlantsInFavorites])
  
  }
  const clickHandler =()=>{
    console.log(props.eachPlant.name, "clicked")
    
  }
  
return(<>   
  <div className="main plant card div">
    <div
      className="plant card"
      key={props.id}
    >
    <div className="image">
      <img src={props.eachPlant.img} alt="don't kill me" />
    </div>
    <div className="plants specs">
      <div className=" plant name">
        {props.eachPlant.name}
      </div>
      <div className="plant water">  
        <h4> Water: {props.eachPlant.water}</h4>
       </div> 
      <div className="plant light">  
        <h4>Light: ☀️ {props.eachPlant.light}</h4>
       </div> 
      <div className="plant description">
        <h3> {props.eachPlant.description}</h3>
      </div>  
    </div>
      <div className="plant description">
        <h3> ❤️ {props.eachPlant.likes}</h3>
      </div>  
          <button
            className="favorites"
            onClick={handleLikes}
          >
            Favorite🍃
          </button>
        
  </div>
</div>



  </>)
}

export default PlantCard;