import React , { useEffect, useState } from 'react'
import TipForm from "./TipForm"


const TipsPage =()=>{
    console.log("In Tips Page")
  //   console.log(json)


  const [tips, setTips] = useState([])
      console.log("State of our Tips[ ", tips, " ]")


useEffect(()=> {

    const postRequest = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React Hooks POST Request Example' })
    };
    fetch("http://localhost:3000/tips")
    .then(response => response.json())
    .then(fetchedTips=> {
        console.log("From Fetch:", fetchedTips)
        
        
        
        setTips(fetchedTips)
    });
}, [])

const addNewTip = (newTip) =>{
    setTips([...tips, newTip])
}
// console.log(tips)
return(
<>
    ( <TipForm addNewTip={addNewTip}/> 
        {/* tips.map(eachTip =>{ console.log(eachTip.tips)  */}
                    {/* return(
                        <span>{eachTip.name}
                    {eachTip.tips}</span>) */}

               
                
                    

                    {/* // <TipForm eachTip={eachTip}/> */}
                
                {/* return(<h4> <TipForm newTip={addNewTip}/> </h4>) */}

        )
    
   {/* <TipForm /> */}
 
</>
)

}
export default TipsPage;