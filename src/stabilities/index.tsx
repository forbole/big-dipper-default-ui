import React from 'react';
import classnames from 'classnames';
import {
  PieChart, Pie, Cell, ResponsiveContainer,
} from 'recharts';
import { Props } from './types';
import { useGetStyles } from './styles';

const COLORS = ['#FF7846', '#FFD800'];

const Stabilities = (prop: Props) => {
  const { classes } = useGetStyles();
  const {
    title,
    coin,
    price,
    inflation,
    marketCap,
    communityPool,
    data,
    classname,
  } = prop;

  const renderCustomizedLabel = ({
    cx, cy,
  }: any) => {
    return (
      <text className={classnames(classes.root)} fill="black" textAnchor="middle">
        <tspan className={classnames('amountInChart')} y={cy} x={cx}>{data.total.display}</tspan>
        <tspan className={classnames('inChart')} x={cx} y={cy + 15}>{coin}</tspan>
      </text>
    );
  };

  // eslint-disable-next-line max-len
  // eslint-disable-next-line no-nested-ternary
  // eslint-disable-next-line max-len
  const BondedPercentage: number = Math.round(((data.detail[0].value ? data.detail[0].value : 0) / ((data.detail[0].value ? data.detail[0].value : 0) + (data.detail[1].value ? data.detail[1].value : 0))) * 1000) / 10;

  const UnbondedPercentage: number = Math.round((100 - BondedPercentage) * 10) / 10;

  return (
    <div className={classnames(classes.root, classname)}>
      <div className={classes.container}>

        <h1>
          {title}
        </h1>
        <div className={classes.box}>
          <div className={classes.chartBox}>
            <ResponsiveContainer height="100%">
              <PieChart>
                <Pie
                  data={data.detail}
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
                      <Cell key={_x.value} fill={COLORS[index % COLORS.length]} />
                    ))
                  }
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className={classes.boxMedium}>
            <div className={classes.boxSmall}>
              <div
                className={classes.bonded}
              />
              <div className={classes.boxSuperSmall}>
                <div className={classnames('itemTitle')}>
                  {data.detail[0].title}
                  {' '}
                  (
                  {BondedPercentage}
                  %)
                </div>
                <div className={classnames('amount')}>
                  {data.detail[0].display}
                  <span className={classes.atom}>
                    {coin}
                  </span>
                </div>
              </div>
            </div>
            <div className={classes.boxSmall}>
              <div
                className={classes.unbonded}
              />
              <div className={classes.boxSuperSmall}>
                <div className={classnames('itemTitle')}>
                  <div className={classnames('marginTopPercentage')}>
                    {data.detail[1].title}
                    {' '}
                    (
                    {UnbondedPercentage}
                    %)
                  </div>
                </div>
                <div className={classnames('amount')}>
                  {data.detail[1].display}
                  <span className={classes.atom}>
                    {coin}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classnames('line')} />
        <div className={classes.boxBottom}>
          <div className={classes.boxBottomSmall1}>
            <div
              className={classnames('itemTitle')}
            >
              {price.title}
            </div>

            <div
              className={classnames('amount')}
            >
              <div
                className={classnames('marginBottom')}
              >
                {price.display}
              </div>
            </div>
            <div
              className={classnames('itemTitle')}
            >
              {marketCap.title}
            </div>
            <div
              className={classnames('amount')}
            >
              {marketCap.display}
            </div>
          </div>
          <div>
            <div
              className={classnames('itemTitle')}
            >
              {inflation.title}
            </div>

            <div
              className={classnames('amount')}
            >
              <div
                className={classnames('marginBottom')}
              >
                {inflation.display}
              </div>
            </div>
            <div
              className={classnames('itemTitle')}
            >
              {communityPool.title}
            </div>
            <div
              className={classnames('amount')}
            >
              {communityPool.display}
              <span className={classes.atom}>
                {coin}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stabilities;
