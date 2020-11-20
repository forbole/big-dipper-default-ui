import React from 'react';

export interface TablePreviewWrapperProps {
  className?: string;
  children?: React.ReactNode;
  title: string;
  action: React.FC;
  footerAction?: React.FC;
}
