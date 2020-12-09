import React from 'react';
import classnames from 'classnames';
import { StatusProp } from './types';
// import { useGetStyles } from './styles';

const Status = (props: StatusProp) => {
  // const { classes } = useGetStyles();
  const { display } = props;

  return (

    <div
      className={classnames('status')}
    >
      <div
        className={classnames('type', display)}
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
