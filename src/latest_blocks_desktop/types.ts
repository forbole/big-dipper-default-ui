import React from 'react';

export type Data = {
  proposer: React.FC;
  height: React.FC;
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
    tx: string
  }
  data: Data[]
}
