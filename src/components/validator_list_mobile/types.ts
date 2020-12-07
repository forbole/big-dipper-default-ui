import {
  ValidatorListData, ValidatorListLabels as Labels, ValidatorListProps,
} from '../../types/validator_list';

export interface ValidatorListMobileProps extends ValidatorListProps {
  active: Data[];
  inactive: Data[];
}
export interface Data extends ValidatorListData {
  imageUrl: string;
  displayName: string;
}

export type {
  Labels,
};
