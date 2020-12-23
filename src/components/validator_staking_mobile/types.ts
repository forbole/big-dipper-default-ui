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
  from: string;
  redelegateTo: string;
}

export interface ValidatorStakingMobileProps {
  className?: string;
  data: Data[];
  labels?: Labels;
}
