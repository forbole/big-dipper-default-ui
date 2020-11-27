import React from 'react';

export interface Props {
  title: string;
  height: Detail;
  proposer: Proposer;
  votingPower: Data;
  colors: string[];
  className?: string;
  round: Detail;
  step: Detail;
}

type Detail = {
  title: string;
  display: string;
}

export type Proposer = {
  title: string;
  display: React.ReactNode;
}

type Data = {
  title: string;
  value: number;
}
