import React from 'react';
import {
  ValidatorListData, ValidatorListLabels, ValidatorListProps,
} from '../../types/validator_list';

export interface ValidatorListDesktopProps extends ValidatorListProps {
  search: Search;
  labels: Labels;
}

export interface Labels extends ValidatorListLabels {
  rank: string;
  moniker: string;
  votingPower: string;
  self: string;
  commission: string;
}

export interface Data extends ValidatorListData {
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
