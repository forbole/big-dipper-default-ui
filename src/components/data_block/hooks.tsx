import { useState } from 'react';
import { UseDataBlockHookProps } from './types';

export const useDataBlockHook = ({
  selectedValue = null, durationsCallback,
}: UseDataBlockHookProps) => {
  const [selected, setSelected] = useState(selectedValue);

  const handleChange = (event: any) => {
    setSelected(event?.target?.value);
  };

  const handleCallback = (value: string | number) => {
    if (durationsCallback) {
      durationsCallback(value);
    }
  };

  return {
    selected,
    handleChange,
    handleCallback,
  };
};
