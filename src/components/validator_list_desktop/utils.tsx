import React from 'react';
import { Labels } from './types';
import { InfoPopover } from '../../../src/components/validator_info/components';

export const getActiveColumns = (labels: Labels) => {
  return ([
    {
      id: 'rank',
      label: '',
      align: 'center',
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
      id: 'condition',
      label: (
        <div>
          {labels.condition}
          <InfoPopover detail="hello world" />
        </div>
      ),
      align: 'center',
      sort: true,
    },
  ]);
};

export const getInactiveColumns = (labels: Labels) => {
  return ([
    {
      id: 'rank',
      label: '',
      align: 'center',
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
      id: 'status',
      label: labels.status,
      sort: true,
    },
  ]);
};
