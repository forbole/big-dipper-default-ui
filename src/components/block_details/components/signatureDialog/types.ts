import React from 'react';

export type TableHead ={
  validator: string;
  votingPower: string;
  votingPowerPercentage: string;
  signStatus: string;
}

export type Data ={
  validator: React.ReactNode;
  votingPower: string;
  votingPowerPercentage: string;
  signStatus: number;
}

export interface DialogProps {
  handleClose: any;
  open: any;
  tableHead: TableHead;
  data: Data[];
  desktop: boolean;
  title: string;
}

export interface DialogTitleProps {
  children: React.ReactNode;
  onClose: () => void;
}
