import React from 'react';
import classnames from 'classnames';
import { ContainerProps } from './types';

const Container = (props: ContainerProps) => {
  const {
    depositor,
    amount,
    time,
  } = props;

  return (
    <div className={classnames('mainContainer')}>
      <div className={classnames('line')} />
      <div className={classnames('container')}>
        <div className={classnames('depositor')}>
          {depositor}
        </div>
        <div className={classnames('amount')}>
          {amount}
        </div>
      </div>
      <div className={classnames('time')}>
        {time}
      </div>
    </div>
  );
};

export default Container;
