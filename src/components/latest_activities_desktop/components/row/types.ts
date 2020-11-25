import {
  DataProps, CollapsibleLabels, OnClick,
} from '../../types';

export interface RowProps {
  data: DataProps;
  labels: CollapsibleLabels | undefined;
  onClick: OnClick | undefined;
}
