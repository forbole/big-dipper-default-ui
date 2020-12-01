import React from 'react';
import classnames from 'classnames';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import { useGetStyles } from './styles';
import { ResponsiveRecharts } from '../..';
import { OnlineVotingPowerProps } from './types';
import { linearGradientBase } from './utils';

const OnlineVotingPower = (props:OnlineVotingPowerProps) => {
  const {
    className,
    data,
    recharts,
    linearGradient = linearGradientBase,
  } = props;
  const { classes } = useGetStyles();

  return (
    <div
      className={classnames(classes.root, className, 'big-dipper', 'online-voting-power')}
    >
      <ResponsiveRecharts aspect={recharts?.gridAspect ?? 1.5}>
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
            interval="preserveStartEnd"
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
          <CartesianGrid stroke={recharts?.cartesianGrid?.stroke ?? undefined} />
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
