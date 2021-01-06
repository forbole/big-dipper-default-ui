export type Data = {
  type: string;
  description: string;
}

export type Label = {
  type: string;
  description: string;
}

export interface DetailProps {
  label: Label;
  data: Data;
}
