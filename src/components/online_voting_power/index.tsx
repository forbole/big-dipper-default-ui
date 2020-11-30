import React from 'react';
import classnames from 'classnames';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import { useGetStyles } from './styles';
import { ResponsiveRecharts } from '../..';
import { OnlineVotingPowerProps } from './types';

const OnlineVotingPower = (props:OnlineVotingPowerProps) => {
  const {
    className,
    data,
    cartesianGrid,
    linearGradient = [
      {
        offset: 0,
        color: '#FD9526',
      },
      {
        offset: 25,
        color: '#f5d442',
      },
      {
        offset: 50,
        color: '#f03a85',
      },
      {
        offset: 75,
        color: '#b641fa',
      },
    ],
  } = props;
  const { classes } = useGetStyles();

  return (
    <div
      className={classnames(classes.root, className, 'big-dipper', 'online-voting-power')}
    >
      <ResponsiveRecharts>
        <LineChart
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0%" y1="0%" x2="100%" y2="0%">
              {
            linearGradient.map((x) => {
              return (
                <stop offset={`${x.offset}%`} stopColor={x.color} key={x.offset} />
              );
            })
          }
            </linearGradient>
          </defs>
          <XAxis
            tickSize={0}
            dataKey="date"
            dy={20}
            height={50}
            tick={{
              fontSize: 10,
            }}
          />
          <YAxis
            dx={-10}
            tickSize={0}
            width={30}
            tick={{
              fontSize: 10,
            }}
          />
          <CartesianGrid stroke={cartesianGrid?.stroke ?? undefined} />
          <Tooltip cursor={false} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="url(#colorUv)"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveRecharts>
    </div>
  );
};

export default OnlineVotingPower;
