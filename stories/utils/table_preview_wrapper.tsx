import React from 'react';
import {
  Button, createStyles, makeStyles,
} from '@material-ui/core';
import { NavigateNext } from '@material-ui/icons';

export const ActionButton = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '&:hover': {
        cursor: 'pointer',
      },
    },
  }));

  const classes = useStyles();
  return (
    <NavigateNext className={classes.root} />
  );
};

export const FooterAction = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      textAlign: 'center',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      See More
    </div>
  );
};
