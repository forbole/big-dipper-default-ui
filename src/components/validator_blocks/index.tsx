import React from 'react';
import classnames from 'classnames';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, BarChart,
  Legend,
} from 'recharts';
import { useGetStyles } from './styles';
import { ResponsiveRecharts } from '../..';

const data = [
  {
    name: 'Page A', uv: 590, pv: 800, amt: 1400,
  },
  {
    name: 'Page B', uv: 868, pv: 967, amt: 1506,
  },
  {
    name: 'Page C', uv: 1397, pv: 1098, amt: 989,
  },
  {
    name: 'Page D', uv: 1480, pv: 1200, amt: 1228,
  },
  {
    name: 'Page E', uv: 1520, pv: 1108, amt: 1100,
  },
  {
    name: 'Page F', uv: 1400, pv: 680, amt: 1700,
  },
];

const ValidatorBlocks = (props:any) => {
  const { classes } = useGetStyles();
  const { className } = props;

  return (
    <div
      className={classnames(classes.root, className, 'big-dipper', 'validator-blocks')}
    >
      <ResponsiveRecharts>
        <BarChart
          layout="vertical"
          data={data}
        >
          <XAxis type="number" orientation="top" tickLine={false} />
          <YAxis dataKey="name" type="category" hide />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        </BarChart>
      </ResponsiveRecharts>
    </div>
  );
};

export default ValidatorBlocks;
