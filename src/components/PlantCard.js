import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, CardColumns } from "react-bootstrap";

function PlantCard( props ){
  //console.log("Plant Card", props)
// <PlantCard eachPlant={eachPlant}
// addPlantToFavorites={addPlantToFavorites}/>

  const [likedPlant, setLikedPlant] = useState(0)

/// for the Favorites button ///
  const favoritedPlantClickHandler= () => {
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
      <CardColumns className="card-columns" >
       <Card style={{ width: '18rem'}} className="card-deck">
    <Card.Header></Card.Header>
    <Card.Text className="plant card" key={props.eachPlant.id}></Card.Text>
    <Card.Img className="image" variant="top"
        src={props.eachPlant.img} alt="Image of a plant" />
    <Card.Body className="plants specs">
      <Card.Title className=" plant name">
        <h2> {props.eachPlant.name} </h2> </Card.Title>
      <Card.Text className="plant water">  
        <h4> Water:  {props.eachPlant.water}</h4>
      </Card.Text> 
      <Card.Text className="plant light">  
        <h4>Light:  {props.eachPlant.light}</h4>
      </Card.Text> 
      <Card.Text className="plant description">
        <h4> Description:   {props.eachPlant.description}</h4>
      </Card.Text>  
      <Button variant="primary" className="plant likes" 
        onClick={clickHandler}> ❤️  Likes {likedPlant}
      </Button>  
      <br>
      </br>
      <br>
      </br>
        <Button variant="secondary"
            className="favorites" onClick={favoritedPlantClickHandler}>
            Favorite🍃 
        </Button>
      <br>
      </br>
      <br>
      </br>
        <Button variant="secondary" className="leave tip">🌱Leave A Tip!🌱</Button>
        <Card.Footer></Card.Footer>
    </Card.Body>
  </Card>
      </CardColumns>
    );


  }
return (   
  <div>
    <CardDisplay />
  </div>
  
);
}

export default PlantCard;