import React from 'react';

export type DataProps = {
  type: {
    display: string;
    className: string;
  },
  time: string;
  success: boolean;
  content: React.ReactNode;
  collapsibleData?: {
    hash: string;
    height: React.ReactNode;
    fee: string;
    gasUsed: string;
    gasWanted: string;
    memo: string;
  }
}
export interface LatestActivitiesDesktopProps {
  className?: string;
  data: DataProps[];
}
