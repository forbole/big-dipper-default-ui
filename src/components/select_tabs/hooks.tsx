import { useState } from 'react';

export const useSelectTabsHook = (selected: string | number, tabs: any[]) => {
  const [selectedValue, setSelectedValue] = useState(selected);
  const [selectedIndex, setSelectedIndex] = useState(tabs.findIndex((x) => {
    return x.key === selectedValue;
  }));

  const handleClick = ({
    key,
    index,
  }: any) => {
    setSelectedIndex(index);
    setSelectedValue(key);
  };

  return {
    handleClick,
    selectedValue,
    selectedIndex: selectedIndex < 0 ? 0 : selectedIndex,
  };
};
