import React from 'react';
import {
  PieChart, Pie, Cell,
} from 'recharts';
import { Props } from './types';
import { useGetStyles } from './styles';

const COLORS = ['#FF7846', '#FFD800'];

const ConsensusState = (prop: Props) => {
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
          CONSENSUS STATE
        </h1>
        <div className={classes.box}>
          <div className={classes.boxSmall}>
            <h4 className={classes.itemTitle}>
              Height
            </h4>
            <p className={classes.amount}>
              2,769,405
            </p>
          </div>
          <div className={classes.boxSmall}>
            <h4 className={classes.itemTitle}>
              Proposer
            </h4>
            <p className={classes.amount}>
              2,769,405
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsensusState;
