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

export type OnClick = (data: Data) => void;

export interface ProposalListProps {
  className?: string;
  data: Data[]
  onClick?: OnClick;
  desktop?: boolean;
  imageUrl?: string;
}
