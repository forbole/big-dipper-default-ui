import React from 'react';

export interface Data {
  proposer: React.ReactNode;
  amount: string;
  time: string;
}

export interface ProposalDepositMobileProps {
  className?: string;
  title: string;
  data: Data[];
}
