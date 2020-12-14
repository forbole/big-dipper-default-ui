import { Data } from '../../../../types';

export const formatRow = (data: Data, index: number) => {
  return ({
    rank: index,
    moniker: data.moniker.display,
    votingPower: `${data.votingPower.display} (${data.votingPower.percentDisplay})`,
    self: data.self?.display,
    commission: data.commission?.display,
    condition: '',
    status: data.status.display,
  });
};
