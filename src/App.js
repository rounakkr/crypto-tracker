import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin'

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=200&page=1&sparkline=false`

  useEffect(() => {
    axios.get(URL)
      .then(res => {
        setCoins(res.data);
      })
      .catch(error => console.log(error))
  });

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  const handleChange = e => {
    setSearch(e.target.value)
  };

  return (
    <div className="coin-app">
      <h1>Crypto Price Tracker</h1>
      <div className="coin-search">
        <h3 className="coin-text">Search a currency</h3>
        <form>
          <input type="text" placeholder="Search" className="coin-input" onChange={handleChange}/>
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            coins={coin}
            key={coin.id}
          />
        )
      })}
    </div>
  );
}

export default App;
