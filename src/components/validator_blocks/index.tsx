import React from 'react';
import classnames from 'classnames';
import {
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Legend,
  Cell,
} from 'recharts';
import { useGetStyles } from './styles';
import { ResponsiveRecharts } from '../..';
import { ToolTip } from './components';
import { ValidatorBlocksProps } from './types';

const ValidatorBlocks = (props:ValidatorBlocksProps) => {
  const { classes } = useGetStyles();
  const {
    className,
    data,
    labels,
    recharts,
    legend,
    title,
    description,
  } = props;

  return (
    <div
      className={classnames(classes.root, className, 'big-dipper', 'validator-blocks')}
    >
      <h3 className={classnames('validator-blocks__title')}>{title}</h3>
      <p className={classnames('validator-blocks__description')}>{description}</p>
      <div className={classnames('validator-blocks__bar-chart')}>
        <ResponsiveRecharts aspect={recharts?.gridAspect}>
          <BarChart
            layout="vertical"
            data={data}
          >
            <XAxis type="number" orientation="top" tickLine={false} />
            <YAxis dataKey="name" type="category" hide />
            <Tooltip
              cursor={false}
              content={<ToolTip labels={labels} />}
            />
            <Legend
              verticalAlign="top"
              align="left"
              iconSize={16}
              payload={[
                {
                  value: labels.missed, type: 'square', id: 'missed', color: legend.missed,
                },
                {
                  value: labels.voted, type: 'square', id: 'voted', color: legend.voted,
                },
              ]}
            />
            <Bar dataKey="signatures.raw">
              {
              data.map((entry:any, index:any) => {
                return (
                  <Cell key={index} fill={entry.voted ? legend.voted : legend.missed} />
                );
              })
            }
            </Bar>
          </BarChart>
        </ResponsiveRecharts>
      </div>
    </div>
  );
};

export default ValidatorBlocks;
