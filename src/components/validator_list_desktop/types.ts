import React from 'react';
import {
  ValidatorListData as Data, ValidatorListLabels as Labels, ValidatorListProps,
} from '../../types/validator_list';

export interface ValidatorListDesktopProps extends ValidatorListProps {
  search: Search;
}

export type Search = {
  placeholder: string;
  value: string;
  onSearchCallback: (value:string) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type {
  Data,
  Labels,
};
