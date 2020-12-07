import { Data } from '../../../../types';

export interface RowProps {
  data: Data;
  columns: any[];
  index: number;
  onClick: (data:Data) => void;
}
