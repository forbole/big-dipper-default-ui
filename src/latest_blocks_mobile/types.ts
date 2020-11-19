import React from 'react';

export type Data = {
  proposer: React.FC;
  height: React.FC;
  time: string;
  hash: string;
  tx: string | number;
}

export interface LatestBlocksMobileProps {
  className?: string;
  labels: {
    tx: string;
  };
  data: Data[]
}
