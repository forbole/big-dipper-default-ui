import React from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer,
} from 'recharts';
import classnames from 'classnames';
import { Props } from './types';
import { useGetStyles } from './styles';

const Consensus = (prop: Props) => {
  const { classes } = useGetStyles();
  const {
    title,
    height,
    proposer,
    step,
    round,
    votingPower,
    className,
    colors,
  } = prop;

  const votingPowerPerentage = [{
    value: votingPower.value,
  }, {
    value: 1 - votingPower.value,
  }];

  const colorsMain = [colors[0], '#00000000'];
  const colorBackground = [colors[1]];

  const renderCustomizedLabel = ({
    cx, cy,
  }: any) => {
    return (
      <text className={classnames(classes.root)} fill="black" textAnchor="middle">
        <tspan className={classnames('amountInChart')} y={cy + 3} x={cx}>{votingPower.display}</tspan>
        <tspan className={classnames('inChart')} x={cx} y={cy + 26}>{`${round.title} ${round.display}`}</tspan>
        <tspan className={classnames('inChart')} x={cx} y={cy + 39}>{`${step.title} ${step.display}`}</tspan>
      </text>
    );
  };

  return (

    <div className={classnames(classes.root, className, 'big-dipper', 'consensus')}>
      <div className={classnames('container')}>
        <h1>
          {title}
        </h1>
        <div className={classnames('box')}>
          <div className={classnames('boxHeight')}>
            <h4>
              {height.title}
            </h4>
            <p className={classnames('amount')}>
              {height.display}
            </p>
          </div>
          <div className={classnames('boxProposer')}>
            <h4>
              {proposer.title}
            </h4>
            <div className={classnames('proposer')}>
              {proposer.display}
            </div>

          </div>
        </div>
        <h4>
          {votingPower.title}
        </h4>
        <div className={classnames('chartContainer')}>
          <div className={classnames('chart')}>
            <ResponsiveContainer width="100%">
              <PieChart>
                <Pie
                  data={votingPowerPerentage}
                  startAngle={240}
                  endAngle={-60}
                  innerRadius="95%"
                  outerRadius="100%"
                  dataKey="value"
                  labelLine={false}
                  isAnimationActive={false}
                  stroke="none"
                  label={renderCustomizedLabel}
                >
                  {
                    votingPowerPerentage.map((_x: any, index: any) => (
                      <Cell className={classnames('pie')} key={_x.value} fill={colorBackground[index % colorBackground.length]} />
                    ))
                  }
                </Pie>
                <Pie
                  data={votingPowerPerentage}
                  startAngle={240}
                  endAngle={-60}
                  innerRadius="93%"
                  outerRadius="100%"
                  dataKey="value"
                  labelLine={false}
                  stroke="none"
                >
                  {
                    votingPowerPerentage.map((_x: any, index: any) => (
                      <Cell className={classnames('pie')} key={_x.value} fill={colorsMain[index % colorsMain.length]} />
                    ))
                  }
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consensus;
