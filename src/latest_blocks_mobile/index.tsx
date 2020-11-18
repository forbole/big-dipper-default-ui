import React from 'react';
import classnames from 'classnames';
import { useGetStyles } from './styles';

const LatestBlocksMobile = (props:any) => {
  const { classes } = useGetStyles();
  const { className } = props;

  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'latest-blocks-mobile')}>
      hohoho
    </div>
  );
};

export default LatestBlocksMobile;
