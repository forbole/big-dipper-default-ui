import React from 'react';
import {
  createStyles, makeStyles,
} from '@material-ui/core';
import { Avatar } from '../../src';

export const ContentMobile = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '& .blue': {
        color: '#66a2de',
      },
      '& .bold': {
        fontWeight: 500,
      },
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span className="blue">
        Lori&nbsp;
      </span>
      delegate&nbsp;
      <span className="bold">1,000 ATOM</span>
      &nbsp;to&nbsp;
      <span className="blue">
        Forbole
      </span>
    </div>
  );
};

export const dummyDataMobile = [
  {
    avatar: <Avatar
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
      width="40px"
      height="40px"
    />,
    content: <ContentMobile />,
    type: {
      display: 'Delegateaaaasvbbbbbbbbbaaaaaaaa',
      className: 'delegate',
    },
    time: '1 hour',
    success: true,
  },
  {
    avatar: <Avatar
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
      width="40px"
      height="40px"
    />,
    content: <ContentMobile />,
    type: {
      display: 'Delegate',
      className: 'delegate',
    },
    time: '1 hour',
    success: true,
  },
  {
    avatar: <Avatar
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
      width="40px"
      height="40px"
    />,
    content: <ContentMobile />,
    type: {
      display: 'Delegate',
      className: 'delegate',
    },
    time: '1 hour',
    success: false,
  },
];
