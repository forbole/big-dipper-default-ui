import React from 'react';
import {
  Data,
  TableHead,
} from './components/signatureDialog/types';

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
    tableHead: TableHead;
  };
  data: Data[];
}
