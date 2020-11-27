import React from 'react';

export interface CollapsibleProps {
  data: {
    label: string;
    value: string | React.ReactNode;
  }[];
}
