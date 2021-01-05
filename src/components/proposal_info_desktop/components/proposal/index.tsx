import React from 'react';
import classnames from 'classnames';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import { ProposalListProps } from './types';
import {
  Button, Status,
} from './components';

const ProposalList = (props: ProposalListProps) => {
  const {
    data, className, label,
  } = props;

  return (
    <div className={classnames(className)}>
      <Table className={classnames('table')}>
        <TableBody>
          <TableRow
            className={classnames('single-row')}
          >
            <TableCell className={classnames('cell', 'id')}>
              #
              {data.id}
            </TableCell>
            <TableCell className={classnames('cell', 'proposal')}>
              <div className={classnames('mainContent')}>
                <div className={classnames('proposer')}>
                  <div className={classnames('proposerText')}>
                    {label.proposer}
                  </div>
                  {data.proposer}
                </div>
                <div className={classnames('title')}>
                  {data.title}
                </div>
                <div className={classnames('mainContent', 'time')}>
                  <div className={classnames('submitted_votingStart')}>
                    <div className={classnames('submitted')}>
                      {label.submittedTime}
                      :
                      &nbsp;
                      {data.submittedTime}
                    </div>
                    <div className={classnames('votingStart')}>
                      {label.votingStartTime}
                      :
                      &nbsp;
                      {data.votingStartTime}
                    </div>
                  </div>

                  <div className={classnames('deposit_votingEnd')}>
                    <div className={classnames('deposit')}>
                      {label.depositEndTime}
                      :
                      &nbsp;
                      {data.depositEndTime}
                    </div>
                    <div className={classnames('voting')}>
                      {label.votingEndTime}
                      :
                      &nbsp;
                      {data.votingEndTime}
                      <span className={classnames('days')}>
                        {data.duration}
                      </span>
                    </div>
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
