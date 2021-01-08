import { Label } from '../../types';

export const getColumns = (label: Label) => {
  return ([
    {
      id: 'votor',
      label: label.voter,
      sort: true,
    },
    {
      id: 'votingPower',
      label: label.votingPower,
      sort: true,
      align: 'right',
    },
    {
      id: 'votingPowerPercentage',
      label: label.votingPowerPercentage,
      sort: true,
      align: 'right',
    },
    {
      id: 'votingPowerOverride',
      label: label.votingPowerOverride,
      sort: true,
    },
    {
      id: 'answer',
      label: label.answer,
      sort: true,
      align: 'right',
    },
  ]);
};
