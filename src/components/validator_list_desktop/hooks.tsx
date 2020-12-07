import { useState } from 'react';
import * as R from 'ramda';

export const useValidatorListDesktopHook = (callback: any) => {
  const handleSearchSubmit = (e:any) => {
    e.preventDefault();
    if (callback) {
      callback();
    }
  };

  return {
    handleSearchSubmit,
  };
};

export const useTableHook = (data:any[], active?:string = 'moniker') => {
  const [state, setState] = useState<any>({
    data,
    activeSort: active,
    sortDirection: 'asc',
  });

  /**
   * lol idk if this works yet
   */
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
        compareA = compareA?.value ?? null;
        compareB = compareB?.value ?? null;
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
