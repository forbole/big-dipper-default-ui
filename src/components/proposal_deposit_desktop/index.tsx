import React from 'react';
import classnames from 'classnames';
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import { ProposalDepositDesktopProps } from './types';
import { useGetStyles } from './styles';
import { Row } from './components';

const ProposalDepositDesktop = (props: ProposalDepositDesktopProps) => {
  const {
    title,
    data,
    className,
    labels,
  } = props;

  const { classes } = useGetStyles();

  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'proposalDepositDesktop')}>
      <h1>
        {title}
      </h1>
      <Table className={classnames('table')}>
        <TableHead className={classnames('tableHead')}>
          <TableRow>
            <TableCell className={classnames('label', 'depositor')}>
              {labels.depositor}
            </TableCell>
            <TableCell className={classnames('label', 'amount')} align="right">
              {labels.amount}
            </TableCell>
            <TableCell className={classnames('label', 'time')} align="right">
              {labels.time}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any) => {
            return (
              <Row depositor={row.depositor} amount={row.amount} time={row.time} />
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProposalDepositDesktop;
