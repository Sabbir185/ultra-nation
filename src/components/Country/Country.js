import React from 'react';

const Country = (props) => {
    const {name, flag, population, capital} = props.country;
    const countryStyle = {
        border:'1px solid gray',
        margin:'10px',
        padding:'10px'

    }

    return (
        <div style={countryStyle}>
            <h4>This is {name}</h4>
            <img style={{height:'50px'}} src={flag} alt=""/>
            <p>Population : {population}</p>
            <p>Population : {capital}</p>
            <button onClick={() => props.addCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;