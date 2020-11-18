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
    action: Action,
    footerAction: FooterAction,
  } = props;

  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'table-preview-wrapper')}>
      <div className={classnames('top-bar')}>
        <h3>
          {title}
        </h3>
        <Action />
      </div>
      <div className={classnames('content')}>
        {children}
      </div>
      {!!FooterAction && (
      <div className={classnames('footer-action')}>
        <FooterAction />
      </div>
      )}
    </div>
  );
};

export default TablePreviewWrapper;
