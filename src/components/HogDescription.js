import React from 'react';

const HogDescription = ({hog}) => {
    const {specialty, greased, weight} = hog
    return ( 
    <>
        <h3>{specialty}</h3>
        <h3>{greased? 'Yes' : 'No'}</h3>
        <h3>{weight}</h3>
        <h3>{hog["highest medal achieved"]}</h3>
    </> );
}
 
export default HogDescription;