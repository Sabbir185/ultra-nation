import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    // totalPopulation using for loop
    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation = totalPopulation + country.population;
    // }


    // using reduce 
    const totalPopulation = cart.reduce( (sum, country) => sum + country.population , 0);

    return (
        <div>
            <h3>This is cart</h3>
            <h5>Total : {cart.length}</h5>
            <h5>total population : {totalPopulation}</h5>
        </div>
    );
};

export default Cart;