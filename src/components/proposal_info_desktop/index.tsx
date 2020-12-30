import React from 'react';
import classnames from 'classnames';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import { AccessTime } from '@material-ui/icons';
import { ProposalInfoProps } from './types';
import { useGetStyles } from './styles';
import {
  Button, Status, Proposal,
} from './components';
import { useProposalUtils } from './utils';

const ProposalInfoDesktop = (props: ProposalInfoProps) => {
  const {
    data, className, type, description,
  } = props;

  const { classes } = useGetStyles();
  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'proposalInfo')}>
      <Proposal
        data={data}
        desktop
        proposerDisplay="Proposer"
      />
      <Table className={classnames('tableDetail')}>
        <TableRow>
          <TableCell className={classnames('label', 'type')} style={{ width: '10rem'}}>
            {type.label}
          </TableCell>
          <TableCell className={classnames('cell', 'type')}>
            {type.display}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={classnames('label', 'description')}>
            {description.label}
          </TableCell>
          <TableCell className={classnames('cell', 'description')}>
            {description.display}
          </TableCell>
        </TableRow>
      </Table>
    </div>
  );
};

export default ProposalInfoDesktop;
