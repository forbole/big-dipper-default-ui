import React from 'react';

export interface Labels {
  depositor: string;
  amount: string;
  time: string;
}

export interface Data {
  proposer: React.ReactNode;
  time: string;
  amount: string;
}

export interface ProposalDepositProps {
  className?: string;
  desktop: boolean;
  title: string;
  data: Data[];
  labels: Labels;
}
