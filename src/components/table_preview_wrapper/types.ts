import React from 'react';

export interface TablePreviewWrapperProps {
  className?: string;
  children?: React.ReactNode;
  title: string;
  action: React.ReactNode;
  footerAction?: React.ReactNode;
}
