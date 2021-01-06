import React from 'react';
import classnames from 'classnames';
import { ProposalInfoProps } from './types';
import { useGetStyles } from './styles';
import {
  Proposal,
  Detail,
} from './components';

const ProposalInfoDesktop = (props: ProposalInfoProps) => {
  const {
    data, className, label,
  } = props;

  const { classes } = useGetStyles();
  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'proposalInfoDesktop')}>
      <Proposal
        data={data}
        label={{
          proposer: label.proposer,
          submittedTime: label.submittedTime,
          votingStartTime: label.votingStartTime,
          votingEndTime: label.votingEndTime,
          depositEndTime: label.depositEndTime,
        }}
      />
      <Detail
        data={data}
        label={label}
      />
    </div>
  );
};

export default ProposalInfoDesktop;
