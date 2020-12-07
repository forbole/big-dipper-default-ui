import React from 'react';
import {
  createStyles, makeStyles,
} from '@material-ui/core';
import { Data } from '../../src/components/latest_blocks_mobile/types';
import { AvatarDisplay } from '../../src';

const Proposer = () => {
  return (
    <AvatarDisplay
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
      title="Forbole"
    />
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
    proposer: <Proposer />,
    height: {
      value: 1234,
      display: <Height />,
    },
    time: '10 Jan 2020,13:00:22 UTC',
    hash: 'D2DCA95541D962A9AA599D43C0E022030986DF23D0BC8AC7A5F0AA0AF401E489',
    tx: 2,
  },
  {
    proposer: <Proposer />,
    height: {
      value: 1234,
      display: <Height />,
    },
    time: '10 Jan 2020,13:00:22 UTC',
    hash: 'D2DCA95541D962A9AA599D43C0E022030986DF23D0BC8AC7A5F0AA0AF401E489',
    tx: 2,
  },
  {
    proposer: <Proposer />,
    height: {
      value: 1234,
      display: <Height />,
    },
    time: '10 Jan 2020,13:00:22 UTC',
    hash: '89832B67F594asddw32',
    tx: 2,
  },
  {
    proposer: <Proposer />,
    height: {
      value: 1234,
      display: <Height />,
    },
    time: '10 Jan 2020,13:00:22 UTC',
    hash: '89832B67F594asddw32',
    tx: 2,
  },
  {
    proposer: <Proposer />,
    height: {
      value: 1234,
      display: <Height />,
    },
    time: '10 Jan 2020,13:00:22 UTC',
    hash: '89832B67F594asddw32',
    tx: 2,
  },
];
