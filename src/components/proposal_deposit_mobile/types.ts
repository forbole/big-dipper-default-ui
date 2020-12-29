import React from 'react';

export interface Data {
  depositor: React.ReactNode;
  amount: string;
  time: string;
}

export interface ProposalDepositMobileProps {
  className?: string;
  title: string;
  data: Data[];
}
