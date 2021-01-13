import React from 'react';
import classnames from 'classnames';
import { ContainerProps } from './types';
import { useGetStyles } from './styles';

const Container = (props: ContainerProps) => {
  const {
    data,
    overrideLabel,
  } = props;

  const { classes } = useGetStyles(data);

  return (
    <div className={classnames(classes.root, 'mainContainer')}>
      <div className={classnames('line')} />
      <div className={classnames('container')}>
        <div className={classnames('validator')}>
          {data.validator.display}
        </div>
        <div className={classnames(data.answer.className)}>
          {data.answer.display}
        </div>
      </div>
      <div className={classnames('container')}>
        <div className={classnames('votingPower')}>
          {data.votingPower.display}
          <span className={classnames('votingPowerPercentage')}>
            {data.votingPowerPercentage.display}
          </span>
        </div>
        <div className={classnames('votingPowerOverride')}>
          <div className={classnames('overrideLabel')}>
            {overrideLabel}
          </div>
          {data.votingPowerOverride.display}
        </div>
      </div>
    </div>
  );
};

export default Container;
