import React from 'react';


const Filter = ({isGreased, onChangeGreased, sortBy, setSortBy}) => {
    return ( 
    <div className='filterWrapper'>

            <label htmlFor="isGreased"> Is greased?</label>
            <input type="checkbox" id="isGreased" name="isGreased" checked={isGreased} onChange={onChangeGreased}/>

            <label htmlFor="sortBy"> Sort By</label>
            <select name="sortBy" value={sortBy} onChange={setSortBy}>
                <option value=""></option>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>

    </div>
     );
}
 
export default Filter;