import React from 'react';

export type Data = {
  proposer: React.ReactNode;
  height: {
    value: number;
    display: React.ReactNode;
  }
  time: string
  hash: string
  tx: string | number;
};

export type OnClick = (data: Data) => void;

export interface LatestBlocksDesktopProps {
  className?: string;
  labels: {
    proposer: string;
    height: string;
    time: string;
    hash: string;
    tx: string;
  }
  data: Data[]
  onClick?: OnClick;
}
