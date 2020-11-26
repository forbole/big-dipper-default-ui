import React from 'react';
import {
  createStyles, makeStyles,
} from '@material-ui/core';
import { Proposer } from '../../src/components/consensus_state/types';

const ProposerData = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      display: 'flex',
      fontSize: '1rem',
      fontWeight: 400,
      margin: '0 0 0 0rem',
      color: '#1D86FF',
    },
  }));

  const classes = useStyles();

  return (
    <p className={classes.root}>Forbole</p>
  );
};

export const dummyProposer: Proposer = {
  title: 'Proposer',
  display: <ProposerData />,
};
