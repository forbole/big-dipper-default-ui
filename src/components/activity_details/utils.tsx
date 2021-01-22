import React from 'react';
import {
  CheckCircle,
  Cancel,
} from '@material-ui/icons';
import classnames from 'classnames';
import {
  Labels, Data,
} from './types';

export const formatData = (data: Data, labels: Labels) => {
  return ([
    {
      key: 'hash',
      label: labels.hash,
      value: <p>{data.hash}</p>,
    },
    {
      key: 'time',
      label: labels.time,
      value: data.time,
    },
    {
      key: 'height',
      label: labels.height,
      value: data.height,
    },
    {
      key: 'fee',
      label: labels.fee,
      value: <p>{data.fee}</p>,
    },
    {
      key: 'gas',
      label: labels.gas,
      value: <p>{data.gas}</p>,
    },
    {
      key: 'status',
      label: labels.status,
      value: data.success
        ? (
          <CheckCircle
            className={classnames('icon', 'success')}
          />
        )
        : (
          <Cancel
            className={classnames('icon', 'fail')}
          />
        ),
    },
    {
      key: 'memo',
      label: labels.memo,
      value: <p>{data.memo}</p>,
    },
  ]);
};
