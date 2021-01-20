import React from 'react';
import { TabProps } from '../../types';
import { TableDefaultProps } from '../../types';

export interface TableProps {
  className?: string;
  tableDefaultProps: TableDefaultProps;
  tabProps: TabProps;
  classNameTab: string;
  classNameIndicator: string;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}
