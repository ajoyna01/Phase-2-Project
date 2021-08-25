import {useState} from "react";

function PlantCard( props ){
  console.log("Plant Card", props)

  const [likedPlants, setLikedPlants] = useState(0)
    //console.log(likedPlants)
//  for the POST request for the tips form
  // const handleTips=(tipsToPOSTAtDB)=> {
  //  fetch(`https://localhost:3000/plants/${plantToLikeAtDB.id}`,
  //  {  method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(likedPlants)
  //   })
  // let likedPlantsInFavorites=likedPlants.filter(eachLikedPlant=>
  //   eachLikedPlant.id === tipsToPOSTAtDB)

  //   setLikedPlants([...likedPlantsInFavorites])
  
  // }
  
  // for the like button
  const clickHandler =()=>{
    console.log(props.eachPlant.name, "clicked")
    setLikedPlants(likedPlants + 1);
  }
  
return(<>   
  <div className="main plant card div">
    <div
      className="plant card"
      key={props.eachPlant.id}
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
      <div className="plant likes"
            >
        <button onClick={clickHandler}> ❤️ Likes {likedPlants}</button>
      </div>  
      <br>
      </br>
          <button
            className="favorites"
            // onClick={handleLikes}
          >
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