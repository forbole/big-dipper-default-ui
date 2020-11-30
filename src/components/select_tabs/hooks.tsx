import { useState } from 'react';
import { Tab } from './types';

export const useSelectTabsHook = (selected: string | number, tabs: Tab[]) => {
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
