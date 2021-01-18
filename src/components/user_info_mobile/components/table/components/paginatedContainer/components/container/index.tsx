import React from 'react';
import classnames from 'classnames';
import { ContainerProps } from './types';

const Container = (props: ContainerProps) => {
  const {
    data,
    className,
  } = props;

  return (
    <div className={classnames(className, 'mainContainer')}>
      <hr className={classnames('line')} />
      <div className={classnames('container')}>
        <div className={classnames('validator')}>
          {data.validator.display}
        </div>
        <div className={classnames('amount')}>
          {data.amount.display}
        </div>
      </div>
    </div>
  );
};

export default Container;
