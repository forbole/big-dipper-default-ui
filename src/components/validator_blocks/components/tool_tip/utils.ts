import {
  Labels, Data,
} from '../../types';

export const getData = (labels:Labels, data:Data) => {
  return (
    [
      {
        label: labels.proposer,
        value: data.proposer,
      },
      {
        label: labels.height,
        value: data.height,
      },
      {
        label: labels.votingPower,
        value: data.votingPower,
      },
      {
        label: labels.gas,
        value: data.gas,
      },
      {
        label: labels.voted,
        value: data.voted ? labels.yes : labels.no,
      },
      {
        label: labels.signatures,
        value: data.signatures?.display,
      },
    ]
  );
};
