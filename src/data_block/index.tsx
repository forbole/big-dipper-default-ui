import React from 'react';
import classnames from 'classnames';
import { useGetStyles } from './styles';
import { DataBlockProps } from './types';

/**
 * Component used for displaying general grid data
 */
const DataBlock = (props: DataBlockProps) => {
  const { classes } = useGetStyles();
  const {
    label,
    duration,
    value,
  } = props;
  return (
    <div
      className={classnames(classes.root, 'big-dipper', 'data-block')}
    >
      <div
        className={classnames('header')}
      >
        <p
          className={classnames('label')}
        >
          {label}
        </p>
        <p
          className={classnames('duration')}
        >
          {duration}
        </p>
      </div>
      <h1
        className={classnames('value')}
      >
        {value}
      </h1>
    </div>
  );
};

export default DataBlock;
