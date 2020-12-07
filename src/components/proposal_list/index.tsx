import React from 'react';
import classnames from 'classnames';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import { ProposalListProps } from './types';
import { useGetStyles } from './styles';
import { latestBlocksDesktopUtils } from './utils';

const ProposalList = (props: ProposalListProps) => {
  const {
    data, className, onClick,
  } = props;
  const { classes } = useGetStyles();
  const { handleClick } = latestBlocksDesktopUtils(onClick);
  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'latest-blocks-desktop')}>
      <Table className={classnames('table')}>
        <TableBody>
          {data.map((row) => {
            return (
              <TableRow
                key={row.time}
                className={classnames('single-row')}
                onClick={() => handleClick(row)}
              >
                <TableCell className={classnames('cell', 'id')}>
                  <p>
                    #01
                  </p>
                </TableCell>
                <TableCell className={classnames('cell', 'proposal')}>
                  <p className={classnames('proposal', 'proposer')}>
                    <div className={classnames('proposer')}>
                      Proposer
                    </div>
                    <div>
                      PlaceHolder
                    </div>
                  </p>
                  <div className={classnames('proposal', 'title')}>
                    Are Validators Charging 0% Commission Harmful to the Success of the Cosmos Hub?
                  </div>
                  <div className={classnames('proposal', 'content')}>
                    This governance proposal is intended to act purely as a signalling proposal.
                  </div>

                  <div className={classnames('proposal', 'time', 'content')}>
                    <div className={classnames('voting')}>
                      Voting Time: 12 Dec 2019 16:22 to 26 Dec 2019, 16:22 UTC
                    </div>
                    <div className={classnames('days')}>
                      {' '}
                      (In 14 days)
                    </div>

                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProposalList;
