import React from 'react';

export interface Labels {
  validator: string;
  votingPower: string;
  votingPowerPercentage: string;
  signStatus: string;
}

export interface Data {
  validator: {
    rawValue: string;
    display: React.ReactNode;
  }
  votingPower: {
    rawValue: number;
    display: string;
  }
  votingPowerPercentage: {
    rawValue: number;
    display: string;
  }
  signStatus: {
    rawValue: number;
    display: string;
  }
}

export type OnClick = (data: any) => void;

export interface ProposalListProps {
  className?: string;
  desktop: boolean;
  title: string;
  txHash: {
    display: string;
    value: string;
  };
  time: {
    display: string;
    value: string;
  };
  noTransactions: {
    display: string;
    value: string;
  };
  proposer: {
    display: string;
    value: React.ReactNode;
  };
  signedVotingPower: {
    display: string;
    value: string;
  };
  signatures: {
    display: string;
    value: string;
    onClick?: OnClick;
    labels: Labels;
    data: Data[];
  };
}
