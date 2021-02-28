import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Country/Cart/Cart';

function App() {
  const [countries, setCountry] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountry(data));
  },[]);

  const [cart, setCart] = useState([]);

  const addCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  }

  return (
    <div className="App">
      <h2>Total country : {countries.length}</h2>
      <h3>Country Added : {cart.length}</h3>
      <Cart cart={cart}></Cart>
      <ul>
        {
          countries.map(country => <Country country={country} key={country.alpha3Code} addCountry={addCountry}></Country>)
        }
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
