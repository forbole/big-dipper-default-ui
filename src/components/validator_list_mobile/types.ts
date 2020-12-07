import {
  ValidatorListData, ValidatorListLabels as Labels, ValidatorListProps,
} from '../../types/validator_list';

export interface ValidatorListMobileProps extends ValidatorListProps {
  active: Data[];
  inactive: Data[];
  onClick?: (data:Data) => void;
}
export interface Data extends ValidatorListData {
  moniker: {
    display: string;
    imageUrl: string;
  },
}

export type {
  Labels,
};
