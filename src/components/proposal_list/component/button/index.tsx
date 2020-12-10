import React from 'react';
import classnames from 'classnames';
import { ButtonProp } from './types';

const Button = (props: ButtonProp) => {
  const { display } = props;
  return (
    <input
      type="button"
      value={display}
      className={classnames('button', display)}
    />
  );
};

export default Button;
