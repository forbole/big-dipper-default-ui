import React from 'react';
import classnames from 'classnames';
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import { ProposalDepositProps } from './types';
import { useGetStyles } from './styles';

const ProposalDeposit = (props: ProposalDepositProps) => {
  const {
    desktop,
    title,
    data,
    className,
    labels,
  } = props;


  const { classes } = useGetStyles();
  const responsiveClass = desktop ? classes.desktop : classes.mobile;

  return (
    <div className={classnames(classes.root, responsiveClass, className, 'big-dipper', 'blockDetails')}>
      <h1>
        {title}
      </h1>
      <Table className={classnames('table')}>
        <TableHead>
          <TableRow>
            <TableCell className={classnames('cell', 'displayTitle')}>
              depositor
            </TableCell>
            <TableCell className={classnames('cell', 'value')}>
              10.8 ATOM
            </TableCell>
            <TableCell className={classnames('cell', 'value')}>
              10 Jan 2020, 13:00:23
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow className={classnames(className)}>
            <TableCell className={classnames('cell', 'displayTitle')}>
              depositor
            </TableCell>
            <TableCell className={classnames('cell', 'value')}>
              10.8 ATOM
            </TableCell>
            <TableCell className={classnames('cell', 'value')}>
              10 Jan 2020, 13:00:23
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ProposalDeposit;
