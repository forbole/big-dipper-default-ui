import React from 'react';
import { Labels } from './types';
import { InfoPopover } from '../..'

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
        <div className="condition__label">
          {labels.condition.display}
          <InfoPopover detail={labels.condition.description} />
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
