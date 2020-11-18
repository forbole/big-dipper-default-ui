import React from 'react';

export type Data = {
  proposer: {
    value: React.FC;
  }
  height: {
    value: React.FC;
  }
  time: {
    value: string;
  }
  hash: {
    value: string;
  }
  tx: {
    value: string | number;
    label: string;
  }
}
export interface LatestBlocksMobileProps {
  className?: string;
  data: Data[]
}
