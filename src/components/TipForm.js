import React, { useState } from 'react';



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

        // console.log(thisTipForm)

    // tips.thisTipForm()   
       
       
    // console.log( "My Tips", props)
    // tips.addNewTip={thisTipForm}

  

    //   console.log(thisTipForm)
    
    //    props.addNewTip={thisTipForm}
        //   return (thisTipForm)
    } 
         
    const handleSubmit=(event)=>{
            event.preventDefault(console.log("what's popping"))
    
            let thisTipForm = 
     
            {
              name: name,
              tips: tips,
            };
            props.addNewTip(thisTipForm)
            
    }
   
return (
    <form onSubmit={handleSubmit} className="new-tip-form">
      <div>Any Advice For Plant Owners??</div>
      <input onChange={changeName} placeholder="Name" />
      <div></div>
      <input onChange={changeContent} placeholder="Leave a Tip..." />
      <div></div>
      <input type="submit" value="Leave a Tip" />
    </form>

    // <FormControl>
    //     <form onSubmit={handleSubmit} className="new-tip-form"></form>
    //     <InputLabel htmlFor="my-input">Tip</InputLabel>
    //     <Input onChange={changeContent} id="content-inout" aria-describedby="my-helper-text" />
    //     <FormHelperText id="my-helper-text">Share Some Plant Advice</FormHelperText>
    //     {/* <Input onChange={changeName} id="my-input" aria-describedby="my-helper-text" />
    //     <FormHelperText id="my-helper-text">Leave Your Name</FormHelperText> */}
    //     <input type="submit" value="Leave a Tip" />
    // </FormControl>
//   );
)}

export default TipForm;
