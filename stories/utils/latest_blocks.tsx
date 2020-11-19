import React from 'react';
import {
  createStyles, makeStyles,
} from '@material-ui/core';
import { Data } from '../../src/latest_blocks_mobile/types';

const Proposer = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      color: '#1D86FF',
    },
  }));

  const classes = useStyles();
  return (
    <p className={classes.root}>Forbole</p>
  );
};

const Height = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      color: '#1D86FF',
    },
  }));

  const classes = useStyles();
  return (
    <p className={classes.root}>102,155</p>
  );
};

export const dummyLabelMobile = {
  tx: 'tx',
};

export const dummyLabelDesktop = {
  proposer: 'Proposer',
  height: 'Height',
  time: 'Time',
  hash: 'Hash',
  tx: 'TXs',
};

export const dummyData:Data[] = [
  {
    proposer: Proposer,
    height: Height,
    time: '10 Jan 2020,13:00:22 UTC',
    hash: '89832B67F594asddw32',
    tx: 2,
  },
  {
    proposer: Proposer,
    height: Height,
    time: '10 Jan 2020,13:00:22 UTC',
    hash: '89832B67F594asddw32',
    tx: 2,
  },
  {
    proposer: Proposer,
    height: Height,
    time: '10 Jan 2020,13:00:22 UTC',
    hash: '89832B67F594asddw32',
    tx: 2,
  },
  {
    proposer: Proposer,
    height: Height,
    time: '10 Jan 2020,13:00:22 UTC',
    hash: '89832B67F594asddw32',
    tx: 2,
  },
  {
    proposer: Proposer,
    height: Height,
    time: '10 Jan 2020,13:00:22 UTC',
    hash: '89832B67F594asddw32',
    tx: 2,
  },
];
