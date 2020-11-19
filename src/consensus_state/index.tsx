import React from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer,
} from 'recharts';
import classnames from 'classnames';
import { Props } from './types';
import { useGetStyles } from './styles';

const COLORS = ['#FF7846', '#FFD800'];

const ConsensusState = (prop: Props) => {
  const { classes } = useGetStyles();
  const {
    title,
    height,
    proposer,
    votingPowerPerentage,
    round,
    step,
    classname,
  } = prop;

  return (

    <div className={classnames(classes.root, classname)}>
      <div className={classes.container}>

        <h1>
          {title}
        </h1>
        <div className={classnames('box')}>
          <div className={classes.boxSmall}>
            <h4>
              Height
            </h4>
            <p className={classnames('amount')}>
              {height}
            </p>
          </div>
          <div className={classes.boxSmall}>
            <h4>
              Proposer
            </h4>
            <p className={classnames('amount')}>
              {proposer}
            </p>
          </div>
        </div>
        <h4>
          Voting Power
        </h4>
        <ResponsiveContainer height="100%">
          <PieChart>
            <Pie
              data={votingPowerPerentage}
              startAngle={70}
              endAngle={-290}
              innerRadius="85%"
              outerRadius="100%"
              dataKey="value"
              labelLine={false}
              stroke="none"
              label={renderCustomizedLabel}
            >
              {
                data.detail.map((_x: any, index: any) => (
                  <Cell className={classnames('pie')} key={_x.value} fill={colors[index % colors.length]} />
                ))
              }
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ConsensusState;
