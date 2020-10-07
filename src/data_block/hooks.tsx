import { useState } from 'react';
import { useDataBlockHookProps } from './types';

export const useDataBlockHook = ({ selectedValue = null }: useDataBlockHookProps) => {
  const [selected, setSelected] = useState(selectedValue);

  const handleChange = (event: any) => {
    setSelected(event?.target?.value);
  };

  return {
    selected,
    handleChange,
  };
};
