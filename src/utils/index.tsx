import React from 'react';

export const getMinMediaQuery = (breakpoint: string | number) => {
  return `@media (min-width: ${breakpoint}px)`;
};

/**
 * Helper function to help generate ellpsis in the middle of text
*/
export const formatMiddleEllipse = (str:string, maxLength = 15) => {
  if (str.length > maxLength) {
    // eslint-disable-next-line
    return str.substr(0, 8) + '...' + str.substr(str.length-3, str.length);
  }
  return str;
};

/**
 * Helper to detail with incoming string | React component
 */
export const valueConvertor = (value: string | React.ReactNode) => {
  if (typeof value === 'string') {
    return (
      <p>{value}</p>
    );
  }
  return value;
};
