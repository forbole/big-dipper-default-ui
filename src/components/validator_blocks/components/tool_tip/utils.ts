export const getData = (labels:any, data:any) => {
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
    ]
  );
};
