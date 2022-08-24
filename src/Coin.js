import React from 'react';
import './Coin.css';

const coin = ({coins}) => {
  return (
    <div className='coin-container'>
        <div className='coin-row'>
            <div className='coin'>
                <img src={coins.image} alt="crypto"/>
                <h1>{coins.name}</h1>
                <p className='coin-symbol'>{coins.symbol}</p>
            </div>
            <div className='coin-data'>
                <p className='coin-price'>Rs {coins.current_price}</p>
                <p className='coin-volume'>Rs {coins.total_volume}</p>
                {
                    coins.price_change_percentage_24h < 0 ?
                    (<p className='coin-percent red'>{coins.price_change_percentage_24h.toFixed(2)}%</p>):
                    (<p className='coin-percent green'>{coins.price_change_percentage_24h.toFixed(2)}%</p>)
                }
                <p className='coin-marketcap'>
                    Mkt Cap: Rs {coins.market_cap.toLocaleString()}
                </p>
            </div>
        </div>
    </div>
  )
}

export default coin