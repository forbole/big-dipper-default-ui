import { ReactElement } from 'react';

export type DurationCallback = (key: string | number) => void;

export interface Duration {
  value: string | number;
  display: string;
}
export interface DataBlockProps {
  label: string;
  durations?: Duration[];
  durationsCallback?: DurationCallback;
  value: string;
  selectedValue?: string | number;
  customComponent?: ReactElement;
  className?: string;
}

export interface UseDataBlockHookProps {
  selectedValue?: string | number | null;
  durationsCallback?: DurationCallback;
}
