import React, { useState } from 'react';
import { useHistory } from 'react-router';



const TipForm =(props)=> {

    const [name, setName] = useState("");
    const [tips, setContent] = useState("");


    const changeName=(event)=>{
        setName(event.target.value)
        console.log(event.target.value)
    }
    
    const changeContent=(event)=>{ 
        setContent(event.target.value)
        console.log(event.target.value)
    } 

const history = useHistory();

const handleSubmit=(event)=>{
        event.preventDefault(console.log("what's popping"))
        
let thisTipForm = 
    {
          name: name,
          tips: tips,
    };
    
    props.addNewTip(thisTipForm)

   fetch("http://localhost:3000/tips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(thisTipForm),
    })
      .then((r) => r.json())
      .then((newForm) => {props.addNewTip(newForm);

        history.push("/TipsPage");
 });
} 
    
  
   
return (<>
  <form onSubmit={handleSubmit} className="new-tip-form">
    <div className="form-title"> Any Advice For Plant Parents??</div>
    <br></br>
    <input onChange={changeName} value={name} placeholder="Name..." />
   
    <div>
      <br></br>
    </div>
    <input onChange={changeContent} value={tips} placeholder="Leave a Tip..." />
    <div></div>
    <br></br>
    <input type="submit" value="🌿 Leave a Tip 🌿" />
  </form>
  <h2>Plant Parent Tips!</h2>

</>)}

export default TipForm;