import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, div } from "react-bootstrap";

function PlantCard( props ){
 // console.log("Plant Card", props)
// <PlantCard eachPlant={eachPlant}
// addPlantToFavorites={addPlantToFavorites}/>

  const [likedPlant, setLikedPlant] = useState(0)

/// for the Favorites button ///
  const favoritedPlantClickHandler= (se) => {
    console.log(se)
    console.log(props.eachPlant)

    props.addPlantToFavorites(props.eachPlant)
  }
/// for the like button ///
  const clickHandler =()=>{
    console.log(props.eachPlant.name, "clicked")

    setLikedPlant(likedPlant + 1);
  }
  function CardDisplay(){
    return (
  <div className="card-columns" >
     <Card style={{ width: '18rem'}} className="card-deck">
      <div className="plant card" key={props.eachPlant.id}>
      </div>
        <div style={{width:'10rem' , height: '8rem'}} className="image" variant="top">
          <img className="pic"src={props.eachPlant.img}  alt="Image of a plant" />
        </div>
        <br>
          </br>
          <br>
          </br>
          <br>
          </br>
        <div className="plants specs">
          <div className="plant-name">
            <h3> {props.eachPlant.name} </h3>
          </div>
          <div className="plant-water">  
            <h4> Water:  {props.eachPlant.water}</h4>
          </div> 
          <div className="plant-light">  
            <h5>Light:  {props.eachPlant.light}</h5>
          </div> 
          <br>
          </br>
          <div className="plant-description">
            <p> Description:   {props.eachPlant.description}</p>
          </div>  
          <br>
          </br>
         </div> 
            <Button variant="primary" className="plant-likes" 
            onClick={clickHandler}> ❤️  Likes {likedPlant}
            </Button>  
          <br>
          </br>
            <Button variant="secondary"
            className="favorites" onClick={favoritedPlantClickHandler}
            >
            Favorite🍃 
            </Button>
          <br>
          </br>
            <Button variant="secondary" className="leave tip">🌱Leave A Tip!🌱</Button>
          <Card.Footer></Card.Footer>
  </Card>
  </div>
    );


  }
return (   
  <div>
    <CardDisplay />
  </div>
  
);
}

export default PlantCard;