/* eslint-disable */
import {
  Data, OnClick,
} from './types';

export const latestBlocksMobileUtils = (onClick: OnClick | undefined) => {
  /**
   * Helper util to handle rows callback
   * @param singleData
   */
  const handleClick = (singleData: Data) => {
    if (onClick) {
      onClick(singleData);
    }
  };



  return {
    handleClick,
  };
};
