import React from 'react';

export interface ActivityDetailsProps {
  desktop?: boolean;
  className?: string;
  labels: Labels;
  data: Data;
}

export type Data = {
  time: string;
  success: boolean;
  content: React.ReactNode;
  hash: string;
  height: React.ReactNode;
  fee: string;
  gas: string;
  memo: string;
}

export type Labels = {
  hash: string;
  height: string;
  fee: string;
  gas: string;
  status: string;
  memo: string;
}
