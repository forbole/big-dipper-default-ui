import React from 'react';
import classnames from 'classnames';
import {
  Select,
  MenuItem,
} from '@material-ui/core';
import { useGetStyles } from './styles';
import { DataBlockProps } from './types';
import { useDataBlockHook } from './hooks';

/**
 * Component used for displaying general grid data
 */
const DataBlock = (props: DataBlockProps) => {
  const { classes } = useGetStyles();
  const {
    label,
    durations,
    value,
    selectedValue,
  } = props;

  const {
    selected,
    handleChange,
  } = useDataBlockHook({
    selectedValue,
  });

  return (
    <div className={classnames(classes.root, 'big-dipper', 'data-block')}>
      <div className={classnames('header')}>
        <p className={classnames('label')}>
          {label}
        </p>
        {durations.length === 1
          ? (
            <p className={classnames('duration')}>
              {durations[0]?.display}
            </p>
          )
          : (
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selected}
              onChange={handleChange}
            >
              {durations.map((x) => (
                <MenuItem key={x.value} value={x.value}>{x.display}</MenuItem>
              ))}
            </Select>
          )}
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
