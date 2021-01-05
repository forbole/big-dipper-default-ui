import React from 'react';

export interface ValidatorProfileProps {
  className?: string;
  imageUrl: string;
  alt: string;
  name: string;
  status: {
    display: string;
    className: string;
  }
  bio: string | React.ReactNode;
  desktopWidth?: number;
}
