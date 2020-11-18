import React from 'react';
import classnames from 'classnames';
import { useGetStyles } from './styles';
import { TablePreviewWrapperProps } from './types';

const TablePreviewWrapper = (props:TablePreviewWrapperProps) => {
  const { classes } = useGetStyles();
  const { className } = props;

  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'table-preview-wrapper')}>
      im a preview wrapper
    </div>
  );
};

export default TablePreviewWrapper;
