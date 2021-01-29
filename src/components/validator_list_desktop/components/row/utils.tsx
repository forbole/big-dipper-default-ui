import React from 'react';
import { Data } from '../../types';

export const formatRow = (data: Data, index: number) => {
  return ({
    rank: index,
    moniker: data.moniker.display,
    votingPower: (
      <span>
        {data.votingPower.display}
        <span className="percentage-data">
          (
          {data.votingPower.percentDisplay}
          )
        </span>
      </span>
    ),
    self: data.self?.display,
    commission: data.commission?.display,
    condition: '',
    status: data?.status?.display,
  });
};
