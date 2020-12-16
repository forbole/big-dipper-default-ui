import React from 'react';

export interface PowerEventsProps {
  className?: string;
  data: Data[];
  desktop?: number;
}

export type Data = {
  blockHeight: React.ReactNode;
  date: string;
  previousValue: string;
  currentValue: string;
  user: React.ReactNode;
  valueDifference: {
    className?: string;
    display: string;
  }
  value: string;
  type: {
    className?: string;
    display: string;
  }
  redelegate?: {
    to: React.ReactNode;
    from: React.ReactNode;
  }
}
