import React from 'react';

export interface Labels {
  depositor: string;
  amount: string;
  time: string;
}

export interface Data {
  depositor: React.ReactNode;
  amount: string;
  time: string;
}

export interface ProposalDepositDesktopProps {
  className?: string;
  title: string;
  data: Data[];
  labels: Labels;
}
