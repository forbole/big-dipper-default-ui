import React from 'react';

export interface ValidatorInfoProps {
  className?: string;
  desktop?: boolean;
  copyCallback?: (value: string) => void;
  title: string;
  operatorAddress: {
    label: string;
    rawValue: string;
    display: string | React.ReactNode;
  }
  selfDelegateAddress: {
    label: string;
    rawValue: string;
    display: string | React.ReactNode;
  }
  commissionRate: {
    label: string;
    display: string | React.ReactNode;
    description: string;
  }
  maxChangeRate: {
    label: string;
    display: string | React.ReactNode;
  }
  maxRate: {
    label: string;
    display: string | React.ReactNode;
    description: string;
  }
}
