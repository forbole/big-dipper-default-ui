import { Data } from '../../types';

export interface ValidatorTableProps {
  data: Data[];
  onRowClick?: (data: Data) => void | undefined;
  columns: any[];
}
