import React from 'react';

export type CollapsibleData = {
  hash: string;
  height: React.ReactNode;
  fee: string;
  gas: string;
  memo: string;
}

export type DataProps = {
  type: {
    display: string;
    className: string;
  },
  time: string;
  success: boolean;
  content: React.ReactNode;
  collapsibleData?: CollapsibleData;
}

export type CollapsibleLabels = {
  hash: string;
  height: string;
  fee: string;
  gas: string;
  status: string;
  memo: string;
}
export interface LatestActivitiesDesktopProps {
  className?: string;
  data: DataProps[];
  collapsibleLabels?: CollapsibleLabels;
}
