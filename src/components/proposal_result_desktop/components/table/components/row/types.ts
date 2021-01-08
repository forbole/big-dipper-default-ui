import React from 'react';

export interface RowProps {
  className?: string;
  voter: React.ReactNode;
  votingPower: string;
  votingPowerPercentage: string;
  votingPowerOverride: string;
  answer: string;
}
