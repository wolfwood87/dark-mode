import React, { useState } from "react";
import Chart from "./Chart";

const Charts = ({ coinData }) => {
  const [chart, setChart] = useState(false);

  const changeChart = () => {
    setChart(!chart)
  }
  return (
    <div className="charts">
      {coinData.map(coin => (
        <div className="chart__container" key={coin.name}>
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
          <p className={`${chart ? 'hide' : 'expand_button'}`} onClick={changeChart}>expand</p>
          <div className={`${chart ? "coin_box" : 'hide'}`}>
            <div className="coin_big_logo">
              <img src={coin.image} alt={coin.name} />
            </div>
            <div className='coin_details'>
              <h1>{coin.name}</h1>
              <h2>{`Current Price: $${coin.current_price}`}</h2>
              <h2>{`Market Cap Rank: ${coin.market_cap_rank}`}</h2>
              <h2>{`Market Cap: $${coin.market_cap}`}</h2>
              <h2>{`24h Low / 24h High $${coin.low_24h} / $${coin.high_24h} `}</h2>
            </div>
          </div>
          <p className={`${chart ? 'expand_button' : 'hide'}`} onClick={changeChart}>collapse</p>
        </div>
        
      ))}
    </div>
  );
};
export default Charts;
