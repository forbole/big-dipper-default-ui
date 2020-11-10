import React from 'react';
import {
  PieChart, Pie, Cell,
} from 'recharts';
import { Props } from './types';
import { useGetStyles } from './styles';

const COLORS = ['#FF7846', '#FFD800'];

const Statbilities = (prop: Props) => {
  const { classes } = useGetStyles();
  const {
    data = [], info = prop.info,
  } = prop;

  function toCurrency(num: number) {
    const parts = num.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  const toMiUnit: number = Math.round((data[0].value + data[1].value)) / 1000000;

  const total: string = toCurrency(Math.round(toMiUnit * 100) / 100);

  // eslint-disable-next-line max-len
  const BondedPercentage: number = Math.round((data[0].value / (data[0].value + data[1].value)) * 1000) / 10;

  const UnbondedPercentage: number = Math.round((100 - BondedPercentage) * 10) / 10;

  return (

    <div className={classes.root}>
      <div className={classes.container}>

        <h1 className={classes.titleMain}>
          Statbilities
        </h1>
        <div className={classes.box}>
          <div className={classes.chartBox}>
            <PieChart width={140} height={140}>
              <Pie
                data={data}
                startAngle={70}
                endAngle={-290}
                innerRadius={60}
                outerRadius={70}
                dataKey="value"
              >
                {
                  data.map((_x: any, index: any) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                }
              </Pie>
            </PieChart>
            <div className={classes.chartCenter}>
              <h4 className={classes.amountInChart}>
                {total}
                {' '}
                m
              </h4>
              <div
                className={classes.atom}
                style={{
                  height: '1rem', marginLeft: '0rem', marginTop: '0rem',
                }}
              >
                ATOMs
              </div>
            </div>
          </div>
          <div className={classes.boxMedium}>
            <div className={classes.boxSmall}>
              <div className={classes.bonded} />
              <div className={classes.boxSuperSmall}>
                <h4 className={classes.itemTitle}>
                  Bunded (
                  {BondedPercentage}
                  %)
                </h4>
                <div className={classes.amount}>
                  {toCurrency(Math.round((data[0].value) * 100) / 100)}
                  <a className={classes.atom}>
                    ATOM
                  </a>
                </div>
              </div>
            </div>
            <div className={classes.boxSmall}>
              <div className={classes.unbonded} />

              <div className={classes.boxSuperSmall}>
                <h4 className={classes.itemTitle}>
                  Unbunded (
                  {UnbondedPercentage}
                  %)
                </h4>
                <div className={classes.amount}>
                  {toCurrency(Math.round((data[1].value) * 100) / 100)}
                  <span className={classes.atom}>
                    ATOM
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
              style={{
                marginLeft: '0rem',
              }}
            >
              Price
            </h4>
            <div
              className={classes.amount}
              style={{
                marginBottom: '2rem',
                marginLeft: '0rem',
              }}
            >
              $
              {toCurrency(Math.round((info.price) * 100) / 100)}
            </div>
            <h4
              className={classes.itemTitle}
              style={{
                marginLeft: '0rem',
              }}
            >
              Market Cap
            </h4>
            <div
              className={classes.amount}
              style={{
                marginLeft: '0rem',
              }}
            >
              $
              {toCurrency(Math.round((info.marketCap) * 100) / 100)}
            </div>
          </div>
          <div className={classes.boxBottomSmall2}>
            <h4
              className={classes.itemTitle}
              style={{
                marginLeft: '0rem',
              }}
            >
              Inflation
            </h4>
            <div
              className={classes.amount}
              style={{
                marginBottom: '2rem',
                marginLeft: '0rem',
              }}
            >
              {toCurrency(Math.round((info.inflation) * 100) / 100)}
              {' '}
              %
            </div>
            <h4
              className={classes.itemTitle}
              style={{
                marginLeft: '0rem',
              }}
            >
              Community Pool
            </h4>
            <div
              className={classes.amount}
              style={{
                marginLeft: '0rem',
              }}
            >
              {toCurrency(Math.round((info.communityPool) * 100) / 100)}
              <a className={classes.atom}>
                ATOM
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statbilities;
