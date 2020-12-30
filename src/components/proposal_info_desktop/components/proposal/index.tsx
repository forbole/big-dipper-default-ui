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
// import { useProposalUtils } from './utils';

const ProposalList = (props: ProposalListProps) => {
  const {
    data, className, desktop, proposerDisplay,
  } = props;

  const { classes } = useGetStyles();
  // const { handleClick } = useProposalUtils(onClick);
  const responsiveClass = desktop ? classes.desktop : classes.mobile;
  return (
    <div className={classnames(classes.root, responsiveClass, className, 'big-dipper', 'proposalList')}>
      <Table className={classnames('table')}>
        <TableBody>

          <TableRow
            // key={data.time}
            className={classnames('single-row')}
            // onClick={() => handleClick(row)}
          >
            <TableCell className={classnames('cell', 'id')}>
              #
              {data.id}
            </TableCell>
            <TableCell className={classnames('cell', 'proposal')}>
              <div className={classnames('mainContent')}>
                <div className={classnames('proposer')}>
                  <div className={classnames('proposerText')}>
                    {proposerDisplay}
                  </div>
                  {data.proposer}
                </div>
                <div className={classnames('title')}>
                  {data.title}
                </div>
                {/* <div className={classnames('mainContent', 'content')}>
                  {data.content}
                </div> */}
                <div className={classnames('mainContent', 'time')}>
                  <div className={classnames('voting')}>
                    <AccessTime className={classnames('clockImage')} />
                    {data.time}
                    <span className={classnames('days')}>
                      {data.duration}
                    </span>
                  </div>

                </div>
              </div>
              <div className={classnames('component')}>
                {data.status.current
                  ? <Button display={data.status.display} />
                  : <Status display={data.status.display} />}
              </div>
            </TableCell>
          </TableRow>

        </TableBody>
      </Table>
    </div>
  );
};

export default ProposalList;
