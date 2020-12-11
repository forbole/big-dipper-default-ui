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
      label: labels.hash,
      value: <p>{data.hash}</p>,
    },
    {
      label: labels.height,
      value: data.height,
    },
    {
      label: labels.fee,
      value: <p>{data.fee}</p>,
    },
    {
      label: labels.gas,
      value: <p>{data.gas}</p>,
    },
    {
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
      label: labels.memo,
      value: <p>{data.memo}</p>,
    },
  ]);
};
