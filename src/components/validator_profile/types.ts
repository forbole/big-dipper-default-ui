import React from 'react';

export interface ValidatorProfileProps {
  className?: string;
  image: string | React.ReactNode;
  alt: string;
  name: string;
  status: {
    display: string;
    className: string;
  }
  bio: string | React.ReactNode;
  desktopWidth?: number;
  keyBase: {
    display: string;
    verified?: boolean;
    url?: string,
  }
  website?: string;
}
