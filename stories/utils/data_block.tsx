import React from 'react';
import {
  AreaChart,
  Area,
} from 'recharts';

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

export const DataBlockCustom = () => {
  return (
    <AreaChart
      width={120}
      height={40}
      data={data}
      margin={{
        top: 5, right: 0, left: 0, bottom: 5,
      }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#ffffff" stopOpacity={0.6} />
          <stop offset="95%" stopColor="#fcba03" stopOpacity={0.0} />
        </linearGradient>
      </defs>
      <Area
        type="monotone"
        dataKey="uv"
        fill="url(#colorUv)"
      />
    </AreaChart>
  );
};
