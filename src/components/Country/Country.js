import React from 'react';

const Country = (props) => {
    const {name, flag, population, capital} = props.country;
    return (
        <div style={{borderBottom:'1px solid gray'}}>
            <h4>This is {name}</h4>
            <img style={{height:'50px'}} src={flag} alt=""/>
            <p>Population : {population}</p>
            <p>Population : {capital}</p>
        </div>
    );
};

export default Country;