import { Labels } from './types';

export const getColumns = (labels: Labels) => {
  return ([
    {
      id: 'validator',
      label: labels.validator,
      sort: true,
    },
    {
      id: 'votingPower',
      label: labels.votingPower,
      sort: true,
      align: 'right',
    },
    {
      id: 'votingPowerPercentage',
      label: labels.votingPowerPercentage,
      sort: true,
      align: 'right',
    },
    {
      id: 'signStatus',
      label: labels.signStatus,
      sort: true,
    },
  ]);
};
