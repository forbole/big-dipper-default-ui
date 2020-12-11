import React from 'react';
import classnames from 'classnames';
import { ButtonProp } from './types';

const Button = (props: ButtonProp) => {
  const { display } = props;
  return (
    <button type="button" disabled className={classnames('button', display)}>
      {display}
    </button>
  );
};

export default Button;
