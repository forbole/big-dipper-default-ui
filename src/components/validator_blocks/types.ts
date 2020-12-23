import React from 'react';

export interface ValidatorBlocksProps {
  className?: string;
  title: string;
  description: string;
  labels: Labels;
  legend: Legend;
  recharts?: Recharts;
  data: Data[];
}

export type Labels = {
  proposer: string;
  height: string;
  votingPower: string;
  gas: string;
  missed: string;
  voted: string;
  yes: string;
  no: string;
  signatures: string;
}

export type Legend = {
  missed: string;
  voted: string;
}

export type Recharts = {
  gridAspect?: number;
}

export type Data = {
  proposer: React.ReactNode;
  height: string;
  votingPower: string;
  gas: string;
  voted: boolean;
  signatures: {
    raw: number;
    display: string | number;
  };
}
