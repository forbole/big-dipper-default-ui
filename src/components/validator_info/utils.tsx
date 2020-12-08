import React from 'react';

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
