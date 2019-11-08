import React, { useState } from "react";
import moment from "moment";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const Chart = (props) => {
  const [chart, setChart] = useState(false);

  const changeChart = () => {
    setChart(!chart)
  }
  const formattedData = props.sparklineData
    .map((price, idx) => {
      if (idx % 6 === 0) {
        const timeToSubtract = 168 - idx;
        const date = moment()
          .subtract(timeToSubtract, "hours")
          .format("ddd h:mma");
        return { value: price, date };
      } else if (idx === props.sparklineData.length - 1) {
        const date = moment().format("ddd h:mma");
        return { value: price, date };
      }
      return null;
    })
    .filter(data => data);

  return (
    <div>
    <LineChart width={1100} height={300} data={formattedData}>
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="date" interval={3} />
      <YAxis />
      <Tooltip />
    </LineChart>
    <p className={`${chart ? 'hide' : 'expand_button'}`} onClick={changeChart}>expand</p>
    <div className={`${chart ? "coin_box" : 'hide'}`}>
      <div className="coin_big_logo">
        <img src={props.coin.image} alt={props.coin.name} />
      </div>
      <div className='coin_details'>
        <h1>{props.coin.name}</h1>
        <h2>{`Current Price: $${props.coin.current_price}`}</h2>
        <h2>{`Market Cap Rank: ${props.coin.market_cap_rank}`}</h2>
        <h2>{`Market Cap: $${props.coin.market_cap}`}</h2>
        <h2>{`24h Low / 24h High $${props.coin.low_24h} / $${props.coin.high_24h} `}</h2>
      </div>
    </div>
    <p className={`${chart ? 'expand_button' : 'hide'}`} onClick={changeChart}>collapse</p>
  </div>
  );
};

export default Chart;
