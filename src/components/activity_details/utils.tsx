import React from 'react';
import {
  CheckCircle,
  Cancel,
} from '@material-ui/icons';
import classnames from 'classnames';

export const dummyProps = {
  labels: {
    hash: 'hash',
    height: 'height',
    fee: 'fee',
    gas: 'Gas (used/ wanted)',
    status: 'Status',
    memo: 'Memo',
  },
  data: {
    type: {
      display: 'Delegate',
      className: 'delegate',
    },
    time: '1 hour',
    success: true,
    content: <div>custom content</div>,
    hash: '12344566',
    height: <div>height</div>,
    fee: '123 uatm',
    gas: '1,234 / 20, 999',
    memo: 'baby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooo',
  },
};

export const formatData = (data, label) => {
  return ([
    {
      label: label.hash,
      value: <p>{data.hash}</p>,
    },
    {
      label: label.height,
      value: data.height,
    },
    {
      label: label.fee,
      value: <p>{data.fee}</p>,
    },
    {
      label: label.gas,
      value: <p>{data.gas}</p>,
    },
    {
      label: label.status,
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
      label: label.memo,
      value: <p>{data.memo}</p>,
    },
  ]);
};
