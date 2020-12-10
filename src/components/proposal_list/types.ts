import React from 'react';

export type Data = {
  id: string;
  proposer: React.ReactNode;
  title: {
    display: string;
    id: string
  }
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
  data: Data[]
  desktop?: boolean;
  imageUrl?: string;
}
