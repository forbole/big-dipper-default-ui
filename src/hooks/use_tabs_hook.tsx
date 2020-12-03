import { useState } from 'react';

/**
 * Helper hook that deals with tab changing in mui Tabs
 */
export const useTabsHook = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event:any, newValue: number) => {
    setValue(newValue);
  };

  return {
    value,
    handleChange,
  };
};
