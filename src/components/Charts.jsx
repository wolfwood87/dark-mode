import React, { useState } from "react";
import Chart from "./Chart";

const Charts = ({ coinData }) => {
  const [chart, setChart] = useState(false);

  const changeChart = () => {
    setChart(!chart)
  }
  return (
    <div className="charts">
      {coinData.map((coin, index) => (
        <div className="chart__container" key={coin.name}>
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} coin = {coin}/>
        </div>
        
      ))}
    </div>
  );
};
export default Charts;
