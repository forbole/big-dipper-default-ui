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
  deposit: string;
};

export type Label = {
  id: string;
  proposer: string;
  type: string;
  title: string;
  description: string;
  status: string;
  deposit: string;
  submittedTime: string;
  depositEndTime: string;
  votingStartTime: string;
  votingEndTime: string;
};

export interface GridProps {
  data: Data;
  label: Label;
}
