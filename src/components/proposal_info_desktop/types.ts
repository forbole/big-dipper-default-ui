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

export type Detail = {
  label: string;
  display: string;
};

export interface ProposalInfoProps {
  className?: string;
  data: Data;
  type: Detail;
  description: Detail;
}
