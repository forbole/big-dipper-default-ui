import React from 'react';

export type Data = {
  id: string;
  proposer: React.ReactNode;
  title: string | React.ReactNode;
  status: {
    current: boolean;
    display: string;
  }
  time: string;
  //  | React.ReactNode;
};

export type OnClick = (data: Data) => void;

export interface ProposalListProps {
  className?: string;
  data: Data[]
  onClick?: OnClick;
}
