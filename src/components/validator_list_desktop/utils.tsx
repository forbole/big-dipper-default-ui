import { Labels } from './types';

export const getActiveColumns = (labels: Labels) => {
  return ([
    {
      id: 'rank',
      label: labels.rank,
    },
    {
      id: 'moniker',
      label: labels.moniker,
      sort: true,
    },
    {
      id: 'votingPower',
      label: labels.votingPower,
      sort: true,
    },
    {
      id: 'self',
      label: labels.self,
      sort: true,
      align: 'right',
    },
    {
      id: 'commission',
      label: labels.commission,
      sort: true,
      align: 'right',
    },
    {
      id: 'graph',
      label: '',
    },
  ]);
};
