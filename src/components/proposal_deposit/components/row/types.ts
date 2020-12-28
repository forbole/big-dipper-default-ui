import React from 'react';

export interface RowProps {
  className?: string;
  display: string| React.ReactNode;
  value?: string | React.ReactNode;
  handleClickOpen?: () => void;
}
