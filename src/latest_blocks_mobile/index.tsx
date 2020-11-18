import React from 'react';
import classnames from 'classnames';
import { useGetStyles } from './styles';
import { LatestBlocksMobileProps } from './types';
import { formatHash } from './utils';

const LatestBlocksMobile = (props:LatestBlocksMobileProps) => {
  const { classes } = useGetStyles();
  const {
    className,
    data,
  } = props;

  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'latest-blocks-mobile')}>
      {data.map((x) => {
        return (
          <div className={classnames('single-block')} key={x.time.value}>
            <div className={classnames('flex')}>
              <span className={classnames('proposer')}>
                <x.proposer.value />
              </span>
              <span className={classnames('height')}>
                <x.height.value />
              </span>
            </div>
            <div className={classnames('flex')}>
              <p className={classnames('hash')}>{formatHash(x.hash.value)}</p>
              <p className={classnames('tx')}>
                {x.tx.label}
                <span className={classnames('decorator')}>:&nbsp;</span>
                {x.tx.value}
              </p>
            </div>
            <p className={classnames('time')}>{x.time.value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default LatestBlocksMobile;
