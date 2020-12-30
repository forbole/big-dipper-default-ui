import React from 'react';

export type Data = {
  id: number | string;
  proposer: React.ReactNode;
  title: React.ReactNode;
  content: string;
  status: {
    current: boolean;
    display: string;
  }
  time: string;
  duration?: string;
};

export interface ProposalListProps {
  className?: string;
  data: Data;
  desktop?: boolean;
  proposerDisplay?: string;
}
