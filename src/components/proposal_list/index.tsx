/* eslint-disable react/destructuring-assignment */
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
import {
  Title, Button, Status,
} from './component';

const Component = (props: { current: boolean, display: string }) => {
  // const { classes } = useGetStyles();
  if (props.current === true) {
    return (
      <div className={classnames('button')}>
        <Button display={props.display} />
      </div>
    );
  }
  return (
    <div className={classnames('status')}>
      <Status display={props.display} />
    </div>
  );
};

const ProposalList = (props: ProposalListProps) => {
  const {
    data, className, desktop, imageUrl,
  } = props;
  const { classes } = useGetStyles();
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
                    <div className={classnames('mainContent', 'title')}>
                      <Title display={row.title.display} id={row.title.id} />
                    </div>
                    <div className={classnames('mainContent', 'content')}>
                      {row.content}
                    </div>
                    <div className={classnames('mainContent', 'time')}>
                      <div className={classnames('voting')}>
                        <span className={classnames('clock')}>
                          <img src={imageUrl} alt="" className={classnames('clockImage')} />
                          &nbsp;
                        </span>
                        {row.time}
                        <span className={classnames('days')}>
                          &nbsp;
                          {row.duration}
                        </span>
                      </div>

                    </div>
                  </div>
                  <div className={classnames('component')}>
                    <Component {...row.status} />
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
