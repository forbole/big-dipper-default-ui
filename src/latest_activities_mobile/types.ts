import React from 'react';

export interface LatestActivitiesMobileProps {
  className?: string;
  data: {
    avatar: React.ReactNode;
    content: React.ReactNode;
    time: string;
    type: {
      className?: string;
      display: string;
    };
    success: boolean;
  }[]
}
