export interface CustomToolTipProps {
  active?: boolean;
  payload?: any;
  label?: string;
  formatter?: (value: string) => any;
  className?: string;
}
