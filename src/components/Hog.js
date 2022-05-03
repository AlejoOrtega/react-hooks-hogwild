import React, { useState } from 'react';
import HogDescription from './HogDescription';


const Hog = ({hog, onHideHog}) => {
    const {name, image} = hog

    const [showDetails, setShowDetails] = useState(false)
    const handleClick = () => {
        setShowDetails(!showDetails)
    }
    return ( 
    <div className="ui four wide column pigTile">
        <img className="ui image" src={image} alt={name}/>
        <h1 className='ui header'>{name}</h1>
        {showDetails? <HogDescription hog={hog}/> : null}
        <button onClick={handleClick}>Show details!</button>
        <button onClick={()=> onHideHog(name)}>Hide me!</button>
    </div> 
    );
}
 
export default Hog;