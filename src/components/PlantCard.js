import React from "react";

function PlantCard( {eachPlant} ){
  console.log("Plant Card", eachPlant)





  return(<>  - Plant Card -    
  <div className="main plant card div">
  <div
    className="plant card"
    key={eachPlant.id}
    onClick={()=> 
      console.log("add event listener")
    }>
    <div className="image">
      <img src={eachPlant.img} alt="don't kill me" />
    </div>
    <div className="plants specs">
      <div className=" plant name">
        {eachPlant.name}
      </div>
      <div className="plant water">  
        <h4> {eachPlant.water}</h4>
       </div> 
      <div className="plant light">  
        <h4> {eachPlant.light}</h4>
       </div> 
      <div className="plant description">
        <h3> {eachPlant.description}</h3>
      </div>  
    </div>
      <div className="plant description">
        <h3> {eachPlant.likes}</h3>
      </div>  
          <button
            className="favorites"
            onClick={() => 
              console.log("add event listener")
            }
          >
            Favorite
          </button>
        
  </div>
</div>
);


  </>)
}

export default PlantCard;