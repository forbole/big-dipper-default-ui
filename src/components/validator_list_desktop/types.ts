import React from 'react';
import {
  ValidatorListData as Data, ValidatorListLabels, ValidatorListProps,
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

export type Search = {
  placeholder: string;
  value: string;
  onSearchCallback: (value:string) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type {
  Data,
};
