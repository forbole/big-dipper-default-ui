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
  } = prop;

  // eslint-disable-next-line max-len
  const BondedPercentage: number = Math.round((data.detail[0].value / (data.detail[0].value + data.detail[1].value)) * 1000) / 10;

  const UnbondedPercentage: number = Math.round((100 - BondedPercentage) * 10) / 10;

  return (
    <div className={classnames(classes.root, 'big-dipper', 'data-block')}>
      <div className={classes.container}>

        <h1 className={classes.titleMain}>
          {title}
        </h1>
        <div className={classes.box}>
          <div className={classes.chartBox}>
            <ResponsiveContainer width={140} height="100%">
              <PieChart
              // width={140} height={140}
              >
                <Pie
                  data={data.detail}
                  startAngle={70}
                  endAngle={-290}
                  innerRadius={60}
                  outerRadius={70}
                  dataKey="value"
                >
                  {
                    data.detail.map((_x: any, index: any) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                  }
                </Pie>
              </PieChart>
              <div className={classes.chartCenter}>
                <h4 className={classnames(classes.amountInChart)}>
                  {data.total.display}
                  <div
                    className={classnames('inChart')}
                  >
                    {coin}
                  </div>
                </h4>
              </div>
            </ResponsiveContainer>
          </div>
          <div className={classes.boxMedium}>
            <div className={classes.boxSmall}>
              <div className={classes.bonded} />
              <div className={classes.boxSuperSmall}>
                <h4 className={classes.itemTitle}>
                  {data.detail[0].title}
                  {' '}
                  (
                  {BondedPercentage}
                  %)
                </h4>
                <div className={classes.amount}>
                  {data.detail[0].display}
                  <a className={classes.atom}>
                    {coin}
                  </a>
                </div>
              </div>
            </div>
            <div className={classes.boxSmall}>
              <div className={classes.unbonded} />

              <div className={classes.boxSuperSmall}>
                <h4 className={classes.itemTitle}>
                  {data.detail[1].title}
                  {' '}
                  (
                  {UnbondedPercentage}
                  %)
                </h4>
                <div className={classes.amount}>
                  {data.detail[1].display}
                  <span className={classes.atom}>
                    {coin}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.line} />
        <div className={classes.boxBottom}>
          <div className={classes.boxBottomSmall1}>
            <h4
              className={classes.itemTitle}
            >
              {price.title}
            </h4>
            <div
              className={classnames(classes.amount)}
            >
              <div
                className={classnames('marginBottom')}
              >
                {price.display}
              </div>
            </div>
            <h4
              className={classes.itemTitle}
            >
              {marketCap.title}
            </h4>
            <div
              className={classes.amount}
            >
              {marketCap.display}
            </div>
          </div>
          <div className={classes.boxBottomSmall2}>
            <h4
              className={classes.itemTitle}
            >
              {inflation.title}
            </h4>
            <div
              className={classes.amount}

            >
              <div
                className={classnames('marginBottom')}
              >
                {inflation.display}
              </div>

            </div>
            <h4
              className={classes.itemTitle}
            >
              {communityPool.title}
            </h4>
            <div
              className={classes.amount}
            >
              {communityPool.display}
              <a className={classes.atom}>
                {coin}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stabilities;
