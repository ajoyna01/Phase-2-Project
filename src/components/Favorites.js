import React from 'react'


function Favorites(props) {
    console.log(props)

const plantWasClicked=(clickedOnePlant)=>{
    console.log("from <plantcard/> to faves", clickedOnePlant)
    props.removePlantFromFavorites(clickedOnePlant)
}

return (
<div>
    <h2>Your Windowsill☀️</h2>
{/* Here is where we need to use props to pass in the liked plants */}
</div>
)
} 

export default Favorites;