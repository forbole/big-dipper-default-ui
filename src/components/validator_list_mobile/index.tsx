import React from 'react';
import classnames from 'classnames';
import { SingleValidator } from './components';
import { useGetStyles } from './styles';
import { ValidatorListMobileProps } from './types';

const ValidatorListMobile = (props: ValidatorListMobileProps) => {
  const {
    data = [],
    labels,
    className,
    onClick,
  } = props;

  const { classes } = useGetStyles();

  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'validator-list-mobile')}>
      {data.map((x) => {
        return (
          <SingleValidator
            data={x}
            key={x.operatorAddress}
            labels={labels}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
};

export default ValidatorListMobile;
