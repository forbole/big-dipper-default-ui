import React from 'react';

export interface ValidatorListDesktopProps {
  labels: Labels;
  data: Data[];
  onClick?: (data: Data) => void;
  className?: string;
  inactive?: boolean;
}

export interface Labels {
  moniker: string;
  votingPower: string;
  self: string;
  commission: string;
  status: string;
  condition: {
    display: string;
    description: string;
    descriptionClassname?: string;
  };
}

export interface Data {
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
  };
  moniker: {
    rawValue: string;
    display: React.ReactNode;
  }
  self: {
    rawValue: number;
    display: string;
  }
  condition: {
    className: string;
    rawValue: string;
  }
}
