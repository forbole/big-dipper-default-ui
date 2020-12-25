import React from 'react';

export type Labels ={
  validator: string;
  votingPower: string;
  votingPowerPercentage: string;
  signStatus: string;
}

export interface Data {
  validator: {
    rawValue: string;
    display: React.ReactNode;
  }
  votingPower: {
    rawValue: number;
    display: string;
  }
  votingPowerPercentage: {
    rawValue: number;
    display: string;
  }
  signStatus: {
    rawValue: number;
    display: string;
  }
}

export interface DialogProps {
  className?: string;
  handleClose: any;
  open: any;
  labels: Labels;
  data: Data[];
  desktop: boolean;
  title: string;
}

export interface DialogTitleProps {
  children: React.ReactNode;
  onClose: () => void;
}
