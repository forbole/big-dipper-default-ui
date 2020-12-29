import React from 'react';
import classnames from 'classnames';
import {
  TableCell,
  TableRow,
} from '@material-ui/core';
import { RowProps } from './types';

const Row = (props: RowProps) => {
  const {
    depositor,
    amount,
    time,
  } = props;

  return (
    <TableRow className={classnames('tableRow')}>
      <TableCell className={classnames('cell', 'depositor')}>
        {depositor}
      </TableCell>
      <TableCell className={classnames('cell', 'amount')} align="right">
        {amount}
      </TableCell>
      <TableCell className={classnames('cell', 'time')} align="right">
        {time}
      </TableCell>
    </TableRow>
  );
};

export default Row;
