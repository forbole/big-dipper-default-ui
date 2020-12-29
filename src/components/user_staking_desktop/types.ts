export type Labels = {
  label: string;
  display: string;
}

export interface TableProps {
  className?: string;
  labels: Labels[];
  data: any[];
}
