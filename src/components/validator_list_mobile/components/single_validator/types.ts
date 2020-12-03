import {
  Data, Labels,
} from '../../types';

export interface SingleValidatorProps {
  data: Data;
  labels: Labels;
  onClick: (operatorAddress:string) => void | undefined;
}
