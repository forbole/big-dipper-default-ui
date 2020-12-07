import React from 'react';

export interface ValidatorListProps {
  className?: string;
  labels: ValidatorListLabels;
  active: ValidatorListData[];
  inactive: ValidatorListData[];
  onClick?: (data:ValidatorListData) => void;
  tabs: ValidatorListTabs;
}

export type ValidatorListTabs = {
  handleChange: (_event: any, newValue: number) => void;
  value: number;
}

export type ValidatorListLabels = {
  commission: string;
  active: string;
  inactive: string;
}

export type ValidatorListData = {
  operatorAddress: string;
  status: {
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
