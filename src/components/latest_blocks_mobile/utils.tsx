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

  /**
   * Helper function to help generate ellpsis in the middle of text
  */
  const formatHash = (str:string) => {
    if (str.length > 15) {
      return str.substr(0, 8) + '...' + str.substr(str.length-3, str.length);
    }
    return str;
  }

  return {
    handleClick,
    formatHash,
  };
};
