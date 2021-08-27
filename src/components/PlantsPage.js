import React , { useEffect, useState } from 'react'
import PlantCard from './PlantCard';
import Favorites from './Favorites';
import { BrowserRouter, Route } from 'react-router-dom';
import { light } from '@material-ui/core/styles/createPalette';
import { useHistory } from 'react-router';

const PlantsPage =()=>{
      console.log("In PlantsPage")
    //   console.log(json)


    const [plants, setPlants] = useState([]);
            console.log("State of our plants[ ", plants, " ]")
        
    const [favePlants, setFavePlants] = useState([]);
        console.log("State of our favorites[ ", favePlants, " ]")

        useEffect(()=> {
        fetch("http://localhost:3000/plants")
        .then(response => response.json())
        .then(fetchedPlants => {
            console.log("From Fetch:", fetchedPlants)
            
            
            
            setPlants(fetchedPlants)
                     });
        }, [])
    const history = useHistory();

// const addPlantToFavorites=(clickedPlant)=>{
//     let duplicatePlant = favePlants.find( eachLikedPlant=>
//         eachLikedPlant.id === clickedPlant.id)
// console.log(clickedPlant)
//     if(!duplicatePlant){
//         setFavePlants( [...favePlants, clickedPlant])
//     }
// }
// const favoritedPlantClickHandler= () => {
//     console.log(props.eachPlant)
//     props.addPlantToFavorites(props.eachPlant)
  
const favoritedPlantClickHandler=()=>{
  
    let addPlantToFavorites=(clickedPlant)=>{
        let duplicatePlant = favePlants.find( eachLikedPlant=>
            eachLikedPlant.id === clickedPlant.id)
        if(!duplicatePlant){
            setFavePlants( [...favePlants])
            console.log(favePlants)
        }
    }


    //addPlantToFavorites(duplicatePlant)

    fetch("http://localhost:3000/likedPlants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addPlantToFavorites)
      })
        .then((r) => r.json())
        .then((newFavePlants) => { addPlantToFavorites(newFavePlants);
        console.log(newFavePlants)
        
        // const addPlantToFavorites = (newFave) =>{
        //         let duplicatePlant = favePlants.find( eachLikedPlant=>
        //                     eachLikedPlant.id === newFave.id)
                    
        //                 if(!duplicatePlant){
        //                     setFavePlants( [...favePlants, newFave])
        //                 }
                       
                
        //        }
                console.log(addPlantToFavorites)
          
          
                history.push("/Favorites");
   
   
   
        });
    

}



    return(<>
    
        <h2>PLANTS</h2>
        {
            plants.map(eachPlant =>{ //console.log(eachPlant) 
            
                return(<h4> <PlantCard key={eachPlant.id}
                            eachPlant={eachPlant}
                            favoritedPlantClickHandler={favoritedPlantClickHandler}
                            //removePlantFromFavorites={removePlantFromFavorites}
                            /> </h4>)

            })
        }
    
     {/* {
            favePlants.map(eachPlant=> {
              console.log(eachPlant)
           return(
           <Favorites 
            plants={eachPlant}
            />)   
        })
        
    } */}
    {/* <BrowserRouter>
        <Route  path='/PlantsPage/Favorites' component={Favorites}/>
    </BrowserRouter> */}


     
    </>)


}
export default PlantsPage;