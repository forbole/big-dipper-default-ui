import React from 'react';

export type Data = {
  id: number | string;
  proposer: React.ReactNode;
  title: string;
  status: {
    current: boolean;
    display: string;
  }
  duration?: string;
  submittedTime: string;
  votingStartTime: string;
  depositEndTime: string;
  votingEndTime: string;
};

export type Label = {
  proposer: string;
  submittedTime: string;
  votingStartTime: string;
  depositEndTime: string;
  votingEndTime: string;
}

export interface ProposalListProps {
  data: Data;
  label: Label;
}
