import React from 'react';

export type Data = {
  id: number | string;
  proposer: React.ReactNode;
  title: string;
  description: string;
  status: {
    current: boolean;
    display: string;
  }
  submittedTime: string;
  depositEndTime: string;
  votingStartTime: string;
  votingEndTime: string;
  duration?: string;
  type: string;
};

export type Label = {
  proposer: string;
  type: string;
  description: string;
  submittedTime: string;
  depositEndTime: string;
  votingStartTime: string;
  votingEndTime: string;
};

export interface ProposalInfoProps {
  className?: string;
  data: Data;
  label: Label;
}
