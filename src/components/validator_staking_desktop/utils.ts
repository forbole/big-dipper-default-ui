import { Labels } from './types';

export const getRows = (labels:Labels) => {
  const results: {
    className: string;
    display: string;
    align?: any;
  }[] = [
    {
      className: 'address',
      display: labels.address,
    },
  ];

  if (labels.from && labels.redelegateTo) {
    results.push(
      {
        className: 'from',
        display: labels.from,

      },
      {
        className: 'redelegate-to',
        display: labels.redelegateTo,
      },
    );
  }

  results.push({
    className: 'amount',
    display: labels.amount,
    align: 'right',
  });

  return results;
};
