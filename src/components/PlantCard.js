import {useState} from "react";

function PlantCard( props ){
  //console.log("Plant Card", props)
// <PlantCard eachPlant={eachPlant}
//   addPlantToFavorites={addPlantToFavorites}
// />

  const [likedPlant, setLikedPlant] = useState(0)

  const favoritedPlantClickHandler= () => {
    console.log(props.eachPlant)
    props.addPlantToFavorites(props.eachPlant)
  }
  // for the like button
  const clickHandler =()=>{
    console.log(props.eachPlant.name, "clicked")
    setLikedPlant(likedPlant + 1);
  }

return(<>   
  <div className="main plant card div">
    <div className="plant card"
      key={props.eachPlant.id}>
      <div className="image">
        <img src={props.eachPlant.img} alt="Image of a plant" />
      </div>
    <div className="plants specs">
      <div className=" plant name">
        {props.eachPlant.name}
      </div>
      <div className="plant water">  
        <h4> Water: {props.eachPlant.water}</h4>
       </div> 
      <div className="plant light">  
        <h4>Light: {props.eachPlant.light}</h4>
       </div> 
      <div className="plant description">
        <h3> {props.eachPlant.description}</h3>
      </div>  
    </div>
      <div className="plant likes">
        <button onClick={clickHandler}> ❤️  Likes {likedPlant}</button>
      </div>  
      <br>
      </br>
        <button
            className="favorites" onClick={favoritedPlantClickHandler}>
            Favorite🍃 
        </button>
      <br>
      </br>
      <br>
      </br>
        <button>🌱Leave A Tip!🌱</button>
    </div>
  </div>
</>)
}

export default PlantCard;