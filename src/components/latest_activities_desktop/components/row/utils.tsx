import {
  DataProps, CollapsibleLabels,
} from '../../types';

export const getCollapsibleTableData = (data: DataProps, labels: CollapsibleLabels) => {
  const { collapsibleData } = data;
  return ([
    {
      label: labels.hash,
      value: collapsibleData!.hash,
    },
    {
      label: labels.height,
      value: collapsibleData!.height,
    },
    {
      label: labels.fee,
      value: collapsibleData!.fee,
    },
    {
      label: labels.gas,
      value: collapsibleData!.gas,
    },
    {
      label: labels.status,
      value: data.success,
    },
    {
      label: labels.memo,
      value: collapsibleData!.memo,
    },
  ]);
};
