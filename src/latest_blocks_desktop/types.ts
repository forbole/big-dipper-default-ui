import React from 'react';

export type Data = {
  proposer: React.ReactNode;
  height: React.ReactNode;
  time: string
  hash: string
  tx: string | number;
};

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
}
