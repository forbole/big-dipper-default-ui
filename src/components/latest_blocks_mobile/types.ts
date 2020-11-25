import React from 'react';

export type Data = {
  proposer: React.ReactNode;
  height: React.ReactNode;
  time: string;
  hash: string;
  tx: string | number;
}

export type OnClick = (data: Data) => void;

export interface LatestBlocksMobileProps {
  className?: string;
  labels: {
    tx: string;
  };
  data: Data[];
  onClick?: OnClick;
}
