import React from 'react';
import classnames from 'classnames';
import { useGetStyles } from './styles';
import { LatestBlocksMobileProps } from './types';
import { latestBlocksMobileUtils } from './utils';

const LatestBlocksMobile = (props:LatestBlocksMobileProps) => {
  const { classes } = useGetStyles();
  const {
    className,
    data,
    labels,
    onClick,
  } = props;
  const {
    formatHash, handleClick,
  } = latestBlocksMobileUtils(onClick);
  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'latest-blocks-mobile')}>
      {data.map((x) => {
        return (
          <div
            className={classnames('single-block')}
            key={x.time}
            onClick={() => handleClick(x)}
            role="button"
          >
            <div className={classnames('flex')}>
              <span className={classnames('proposer')}>
                {x.proposer}
              </span>
              <span className={classnames('height')}>
                {x.height.display}
              </span>
            </div>
            <div className={classnames('flex')}>
              <p className={classnames('hash')}>{formatHash(x.hash)}</p>
              <p className={classnames('tx')}>
                {labels.tx}
                <span className={classnames('decorator')}>:&nbsp;</span>
                {x.tx}
              </p>
            </div>
            <p className={classnames('time')}>{x.time}</p>
          </div>
        );
      })}
    </div>
  );
};

export default LatestBlocksMobile;
