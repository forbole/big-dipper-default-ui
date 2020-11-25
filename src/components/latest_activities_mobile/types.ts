import React from 'react';

export type Data = {
  avatar: React.ReactNode;
  content: React.ReactNode;
  hash: string;
  time: string;
  type: {
    className?: string;
    display: string;
  };
  success: boolean;
}

export type OnClick = (data: Data) => void;
export interface LatestActivitiesMobileProps {
  className?: string;
  data: Data[]
  onClick?: OnClick;
}
