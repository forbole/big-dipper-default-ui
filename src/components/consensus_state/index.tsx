import React from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer,
} from 'recharts';
import classnames from 'classnames';
import { Props } from './types';
import { useGetStyles } from './styles';
import icon from './favicon.png';

const ConsensusState = (prop: Props) => {
  const { classes } = useGetStyles();
  const {
    title,
    height,
    proposer,
    step,
    round,
    votingPower,
    classname,
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
        <tspan className={classnames('amountInChart')} y={cy} x={cx}>85 %</tspan>
        <tspan className={classnames('inChart')} x={cx} y={cy + 20}>{`${round.title} ${round.display}`}</tspan>
        <tspan className={classnames('inChart')} x={cx} y={cy + 30}>{`${step.title} ${step.display}`}</tspan>
      </text>
    );
  };

  return (

    <div className={classnames(classes.root, classname)}>
      <div className={classes.container}>
        <h1>
          {title}
        </h1>
        <div className={classnames('box')}>
          <div className={classes.boxSmall}>
            <h4>
              {height.title}
            </h4>
            <p className={classnames('amount')}>
              {height.display}
            </p>
          </div>
          <div className={classes.boxSmall}>
            <h4>
              {proposer.title}
            </h4>

            <p className={classnames('proposer')}>
              <img src={icon} alt="" className={classnames('icon')} />
              {proposer.display}
            </p>
          </div>
        </div>
        <h4>
          {votingPower.title}
        </h4>
        <div className={classnames(classes.chartBox)}>
          <div
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              marginTop: '0',
            }}
          >
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
                // label={renderCustomizedLabel}
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

export default ConsensusState;
