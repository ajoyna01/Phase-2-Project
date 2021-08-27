import React , { useEffect, useState } from 'react'
import TipForm from "./TipForm"


const TipsPage =()=>{
    console.log("In Tips Page")
  //   console.log(json)


  const [tips, setTips] = useState([]);
      console.log("State of our Tips[ ", tips, " ]")

 


      useEffect(()=> {

        fetch('http://localhost:3000/tips')
        .then(response => response.json())
        .then(fetchedTips =>{ console.log(fetchedTips)
            setTips(fetchedTips)
        
        });
         
    }, [])
    
    const addNewTip = (newTip) =>{
        setTips([...tips, newTip])
    }
    console.log(tips)
    return(<>

    <TipForm addNewTip={addNewTip}/> 
    
            {tips.map(eachTip =>{ console.log(eachTip)
                return(<>
                            <h3>{eachTip.name}</h3>
                            <p> {eachTip.tips}</p>
                            </>)}
            )}
    
   
    
                   
                
    </>  )
    
    }
export default TipsPage;