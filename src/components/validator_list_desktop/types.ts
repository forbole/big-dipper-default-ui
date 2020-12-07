import React from 'react';
import {
  ValidatorListData, ValidatorListLabels, ValidatorListProps,
} from '../../types/validator_list';

export interface ValidatorListDesktopProps extends ValidatorListProps {
  search: Search;
  labels: Labels;
  active: Data[];
  inactive: Data[];
  onClick?: (data:Data) => void;
}

export interface Labels extends ValidatorListLabels {
  rank: string;
  moniker: string;
  votingPower: string;
  self: string;
  commission: string;
  status: string;
}

export interface Data extends ValidatorListData {
  moniker: {
    rawValue: string;
    display: React.ReactNode;
  }
  self: {
    rawValue: number;
    display: string;
  }
}

export type Search = {
  placeholder: string;
  value: string;
  onSearchCallback: (value:string) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
