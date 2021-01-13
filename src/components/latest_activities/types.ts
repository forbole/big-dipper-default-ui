import React from 'react';

export interface LatestActivitiesProps {
  className?: string;
  transactions: Transaction[];
  onClick?: (hash:string | number) => void;
}

export type Transaction = {
  hash: {
    value: number | string;
    display: string;
  };
  timestamp: string;
  success: boolean;
  messages: React.ReactNode[];
}
