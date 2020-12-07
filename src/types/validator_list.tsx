import React from 'react';

export interface ValidatorListProps {
  className?: string;
  labels: ValidatorListLabels;
  active: ValidatorListData[];
  inactive: ValidatorListData[];
  tabs: ValidatorListTabs;
}

export type ValidatorListTabs = {
  handleChange: (_event: any, newValue: number) => void;
  value: 0 | 1;
}

export type ValidatorListLabels = {
  commission: string;
  active: string;
  inactive: string;
}

export type ValidatorListData = {
  operatorAddress: string;
  status: {
    rawValue: string;
    className: string;
    display: string;
  }
  commission?: {
    rawValue: number;
    display: string;
  };
  votingPower: {
    rawValue: number;
    display: string;
    percentDisplay: string;
    visual?: React.ReactNode;
  }
}
