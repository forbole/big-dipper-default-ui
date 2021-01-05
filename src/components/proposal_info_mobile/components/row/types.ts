import React from 'react';

export interface RowProps {
  className?: string;
  classNameLabel?: string;
  classNameDisplay?: string;
  label?: string;
  display?: string | React.ReactNode;
  isAlignRight? : boolean;
}
