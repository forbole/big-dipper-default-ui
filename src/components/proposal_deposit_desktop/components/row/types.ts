import React from 'react';

export interface RowProps {
  className?: string;
  depositor: React.ReactNode;
  amount: string;
  time: string;
}
