import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const OnlineVotingPower = (props:any) => {
  const { data } = props;
  const dev = {
    stroke: 'green',
  };
  const { cartesianGrid = dev } = props;

  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="red" />
          <stop offset="50%" stopColor="yellow" />
          <stop offset="100%" stopColor="green" />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke={cartesianGrid?.stroke ?? undefined} />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="uv"
        stroke="url(#colorUv)"
        strokeWidth={3}
        dot={false}
      />
    </LineChart>
  );
};

export default OnlineVotingPower;
