import React from 'react';
import {
  Votor,
  DataType,
} from '../../types';
import { TabProps } from '../../types';

import { TableDefaultProps } from '../../../table_default/types';

export interface Label {
  voter: string;
  votingPower: string;
  votingPowerPercentage: string;
  votingPowerOverride: string;
  answer: string;
}

export interface Data {
  voter: Votor;
  votingPower: DataType;
  votingPowerPercentage: DataType;
  votingPowerOverride: DataType;
  answer: DataType;
}

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
