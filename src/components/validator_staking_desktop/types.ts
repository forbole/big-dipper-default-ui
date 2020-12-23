import React from 'react';

export type Data = {
  address: React.ReactNode;
  redelegate?: {
    from: React.ReactNode;
    to: React.ReactNode;
  }
  amount: string;
};

export type Labels = {
  address: string;
  from?: string;
  redelegateTo?: string;
  amount: string;
}
export interface ValidatorStakingDesktopProps {
  className?: string;
  labels: Labels;
  data: Data[];
}
