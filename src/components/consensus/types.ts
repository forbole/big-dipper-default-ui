import React from 'react';

export interface Props {
  title: string;
  height: Detail;
  proposer: Proposer;
  votingPower: VotingPower;
  colors: [string, string];
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

type VotingPower = {
  title: string;
  value: number;
  display: string;
}
