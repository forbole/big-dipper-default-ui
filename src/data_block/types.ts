export interface Duration {
  value: string | number;
  display: string | number;
}
export interface DataBlockProps {
  label: string;
  durations: Duration[];
  value: string;
  selectedValue?: string | number;
}

export interface useDataBlockHookProps {
  selectedValue?: string | number;
}
