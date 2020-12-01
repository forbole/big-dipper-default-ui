import React from 'react';
import {
  createStyles, makeStyles,
} from '@material-ui/core';
import { Proposer } from '../../src/components/consensus/types';

const ProposerData = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      display: 'flex',
      fontSize: '1rem',
      fontWeight: 400,
      margin: '0',
      color: '#1D86FF',
    },
    icon: {
      width: '1.5rem',
      height: '1.5rem',
      marginRight: '0.3rem',
    },
  }));

  const classes = useStyles();

  return (
    <a
      style={{
        display: 'flex',
      }}
    >
      <img src="./stories/assets/images/favicon.png" alt="" className={(classes.icon)} />
      <p className={(classes.root)}>Forbole</p>
    </a>
  );
};

export const dummyProposer: Proposer = {
  title: 'Proposer',
  display: <ProposerData />,
};
