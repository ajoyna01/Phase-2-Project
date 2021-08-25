import React , { useEffect, useState } from 'react'
import TipForm from "./TipForm"


const TipsPage =()=>{
    console.log("In Tips Page")
  //   console.log(json)


  const [tips, setTips] = useState([])
      console.log("State of our Tips[ ", tips, " ]")




useEffect(()=> {
    fetch("http://localhost:3000/tips")
    .then(response => response.json())
    .then(fetchedTips=> {
        console.log("From Fetch:", fetchedTips)
        
        
        
        setTips(fetchedTips)
    });
}, [])

return(<>
    
    <h2></h2>
    {
        tips.map(eachTip =>{ console.log(eachTip) 
        
            return(<h4> <TipForm key={eachTip.id}
                        eachTip={eachTip}
                        /> </h4>)

        })
    }
    {/* {critters.map(eachCritter =>{ console.log(eachCritter) })} */}
 
</>)


}
export default TipsPage;