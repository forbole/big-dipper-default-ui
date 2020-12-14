import React from 'react';
import classnames from 'classnames';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import { AccessTime } from '@material-ui/icons';
import { ProposalListProps } from './types';
import { useGetStyles } from './styles';
import {
  Button, Status,
} from './components';
import { useProposalUtils } from './utils';

const ProposalList = (props: ProposalListProps) => {
  const {
    data, className, desktop, onClick,
  } = props;

  const { classes } = useGetStyles();
  const { handleClick } = useProposalUtils(onClick);
  const responsiveClass = desktop ? classes.desktop : classes.mobile;
  return (
    <div className={classnames(classes.root, responsiveClass, className, 'big-dipper', 'proposalList')}>
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
                  {row.id}
                </TableCell>
                <TableCell className={classnames('cell', 'proposal')}>
                  <div className={classnames('mainContent')}>
                    <div className={classnames('proposer')}>
                      <div className={classnames('proposerText')}>
                        Proposer
                      </div>
                      {row.proposer}
                    </div>
                    <div className={classnames('title')}>
                      {row.title}
                    </div>
                    <div className={classnames('mainContent', 'content')}>
                      {row.content}
                    </div>
                    <div className={classnames('mainContent', 'time')}>
                      <div className={classnames('voting')}>
                        <AccessTime className={classnames('clockImage')} />
                        {row.time}
                        <span className={classnames('days')}>
                          {row.duration}
                        </span>
                      </div>

                    </div>
                  </div>
                  <div className={classnames('component')}>
                    {row.status.current
                      ? <Button display={row.status.display} />
                      : <Status display={row.status.display} />}
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
