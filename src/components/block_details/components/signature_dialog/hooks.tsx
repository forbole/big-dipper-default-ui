import { useState } from 'react';

export const useSignatureHook = (data:any[], active = 'validator') => {
  const [state, setState] = useState<any>({
    data,
    activeSort: active,
    sortDirection: 'asc',
  });

  const handleSort = (key:string) => () => {
    const {
      sortDirection,
      activeSort: currentActiveSort,
      data: currentData,
    } = state;
    const newSortDirection = currentActiveSort === key && sortDirection === 'asc' ? 'desc' : 'asc';
    const sortedData = currentData.sort((a:any, b:any) => {
      let compareA = a[key];
      let compareB = b[key];

      if (compareA && typeof compareA === 'string') {
        compareA = compareA?.toLowerCase() ?? '';
        compareB = compareB?.toLowerCase() ?? '';
      } else if (compareA && typeof compareA === 'object') {
        compareA = compareA?.rawValue ?? null;
        compareB = compareB?.rawValue ?? null;
      }
      if (newSortDirection === 'desc') {
        return compareA > compareB ? -1 : 1;
      }
      return compareA > compareB ? 1 : -1;
    });
    setState({
      ...state,
      sortDirection: newSortDirection,
      activeSort: key,
      data: sortedData,
    });
  };

  return {
    state,
    handleSort,
  };
};
