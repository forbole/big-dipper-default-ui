import React from 'react';
import {
  CheckCircle,
  Cancel,
} from '@material-ui/icons';
import classnames from 'classnames';
import {
  DataProps, CollapsibleLabels, OnClick,
} from '../../types';

export const rowUtils = (onClick: OnClick | undefined) => {
  const getCollapsibleTableData = (data: DataProps, labels: CollapsibleLabels) => {
    const { collapsibleData } = data;
    return ([
      {
        label: labels.hash,
        value: data.hash,
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
        value: collapsibleData!.memo,
      },
    ]);
  };

  /**
   * Helper util to handle rows callback
   * @param singleData
   */
  const handleClick = (singleData: DataProps) => {
    if (onClick) {
      onClick(singleData);
    }
  };

  return {
    getCollapsibleTableData,
    handleClick,
  };
};
