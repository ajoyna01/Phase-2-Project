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
    
  
   
return (
    <form onSubmit={handleSubmit} className="new-tip-form">
      <div>Any Advice For Plant Owners??</div>
      <input onChange={changeName} value={name}vplaceholder="Name" />
      <div></div>
      <input onChange={changeContent} value={tips} placeholder="Leave a Tip..." />
      <div></div>
      <input type="submit" value="Leave a Tip" />
    </form>

)}

export default TipForm;