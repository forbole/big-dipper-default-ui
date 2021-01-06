import React from 'react';
import classnames from 'classnames';
import { StatusProp } from './types';

const Status = (props: StatusProp) => {
  const { display } = props;

  return (

    <div
      className={classnames('status')}
    >
      <div
        className={classnames('statusType', display)}
      />
      <div
        className={classnames('statusContent')}
      >
        {display}
      </div>
    </div>
  );
};

export default Status;
