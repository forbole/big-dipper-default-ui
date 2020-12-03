import React from 'react';

export interface SelectTabsProps {
  className?: string;
  tabs: Tab[];
  selected: string | number;
}

export type Tab = {
  key: string | number;
  display: string;
  component: React.ReactNode;
}
