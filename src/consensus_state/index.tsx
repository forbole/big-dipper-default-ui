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
    title,
    height,
    proposer,
    votingPowerPerentage,
    round,
    step,
  } = prop;

  return (

    <div className={classes.root}>
      <div className={classes.container}>

        <h1 className={classes.titleMain}>
          {title}
        </h1>
        <div className={classes.box}>
          <div className={classes.boxSmall}>
            <h4 className={classes.itemTitle}>
              Height
            </h4>
            <p className={classes.amount}>
              {height}
            </p>
          </div>
          <div className={classes.boxSmall}>
            <h4 className={classes.itemTitle}>
              Proposer
            </h4>
            <p className={classes.amount}>
              {proposer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsensusState;
