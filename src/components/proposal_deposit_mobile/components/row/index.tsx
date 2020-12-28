import React from 'react';
import classnames from 'classnames';
import {
  TableCell,
  TableRow,
} from '@material-ui/core';
import { RowProps } from './types';

const Row = (props: RowProps) => {
  const {
    display,
    value,
    className,
    handleClickOpen,
  } = props;

  return (
    <TableRow onClick={handleClickOpen} className={classnames(className)}>
      <TableCell className={classnames('cell', 'displayTitle')}>
        {display}
      </TableCell>
      <TableCell className={classnames('cell', 'value')}>
        {value}
      </TableCell>
    </TableRow>
  );
};

export default Row;
