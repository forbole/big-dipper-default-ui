import React from 'react';

export type CollapsibleData = {
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
  hash: string;
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

export type OnClick = (data:DataProps) => void;

export interface LatestActivitiesDesktopProps {
  className?: string;
  data: DataProps[];
  collapsibleLabels?: CollapsibleLabels;
  onClick?: OnClick;
}
