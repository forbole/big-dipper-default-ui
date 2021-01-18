import React from 'react';
import { TabProps } from '../../types';
import { Data } from '../../../table_paginated/types';

export interface TableDefaultProps {
  className?: string;
  delegatedData: Data[];
  reDelegatedData: Data[];
  unbondingData: Data[];
  pagination?: {
    rowsPerPage: number | undefined;
  };
}

export interface TableProps {
  className?: string;
  tableDefaultProps: TableDefaultProps;
  tabProps: TabProps;
  classNameTab: string;
  classNameIndicator: string;
  pagination?: {
    rowsPerPage: number | undefined;
  };
}

export interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}
