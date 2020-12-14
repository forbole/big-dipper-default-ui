import React from 'react';
import classnames from 'classnames';
import { useGetStyles } from './styles';
import { ValidatorListDesktopProps } from './types';
import {
  getActiveColumns, getInactiveColumns,
} from './utils';
import { ValidatorTable } from './components';

const ValidatorListDesktop = (props: ValidatorListDesktopProps) => {
  const {
    labels,
    className,
    onClick,
    data,
    inactive,
  } = props;

  const { classes } = useGetStyles();
  const columns = inactive ? getInactiveColumns(labels) : getActiveColumns(labels);

  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'validator-list-desktop')}>
      <ValidatorTable
        columns={columns}
        data={data}
        onRowClick={onClick}
      />
    </div>
  );
};

export default ValidatorListDesktop;
