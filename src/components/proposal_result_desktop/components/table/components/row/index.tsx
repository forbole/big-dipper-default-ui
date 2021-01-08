import React from 'react';
import classnames from 'classnames';
import {
  TableCell,
  TableRow,
} from '@material-ui/core';
import { RowProps } from './types';

const Row = (props: RowProps) => {
  const {
    voter,
    votingPower,
    votingPowerPercentage,
    votingPowerOverride,
    answer,
  } = props;

  return (
    <TableRow className={classnames('tableRow')}>
      <TableCell className={classnames('cell', 'voter')}>
        {voter}
      </TableCell>
      <TableCell className={classnames('cell', 'votingPower')} align="right">
        {votingPower}
      </TableCell>
      <TableCell className={classnames('cell', 'votingPowerPercentage')} align="right">
        {votingPowerPercentage}
      </TableCell>
      <TableCell className={classnames('cell', 'votingPowerOverride')} align="right">
        {votingPowerOverride}
      </TableCell>
      <TableCell className={classnames('cell', 'answer')} align="right">
        {answer}
      </TableCell>
    </TableRow>
  );
};

export default Row;
