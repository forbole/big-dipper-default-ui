import { Data } from '../../types';

export const formatRow = (data:Data, index: number) => {
  return ({
    rank: index,
    moniker: data.displayName,
    votingPower: data.votingPower.display,
    commission: data.commission?.display,
    self:
  })
}
