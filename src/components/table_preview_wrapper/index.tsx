import React from 'react';
import classnames from 'classnames';
import { useGetStyles } from './styles';
import { TablePreviewWrapperProps } from './types';

const TablePreviewWrapper = (props:TablePreviewWrapperProps) => {
  const { classes } = useGetStyles();
  const {
    className,
    children,
    title,
    action,
    footerAction,
  } = props;

  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'table-preview-wrapper')}>
      <div className={classnames('top-bar')}>
        <h3>
          {title}
        </h3>
        {action}
      </div>
      <div className={classnames('content')}>
        {children}
      </div>
      {!!footerAction && (
      <div className={classnames('footer-action')}>
        {footerAction}
      </div>
      )}
    </div>
  );
};

export default TablePreviewWrapper;
