import React from "react";

function PlantCard(plants){
  console.log("Plant Card", plants)





  return(<>  - Plant Card -    
  <div className="main plant card div">
  <div
    className="plant card"
    key={plants.id}
    onClick={()=> 
      console.log("add event listener")
    }>
    <div className="image">
      <img alt="don't kill me" src={plants.image_url} />
    </div>
    <div className="plants specs">
      <div className=" plant name">
        {plants.name}
        
      </div>
      <div className="plant water">  
        <h4> {plants.water}</h4>
       </div> 
      <div className="plant light">  
        <h4> {plants.light}</h4>
       </div> 
      <div className="plant description">
        <h3> {plants.description}</h3>
      </div>  
    </div>
          <button
            className="favorites"
            onClick={() => 
              console.log("add event listener")
            }
          >
            x
          </button>
        
  </div>
</div>
);


  </>)
}

export default PlantCard;