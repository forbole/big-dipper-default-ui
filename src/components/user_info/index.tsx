import React from 'react';
import classnames from 'classnames';
import { UserInfoProps } from './types';
import { useGetStyles } from './styles';
import {
  Chart,
  Address,
} from './components';

const UserInfo = (props: UserInfoProps) => {
  const {
    className,
    addressContent,
    chart,
    copyCallback,
  } = props;

  const { classes } = useGetStyles(props);

  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'userInfo')}>
      <Address
        className={classnames(classes.address, 'userInfoAddress')}
        addressContent={addressContent}
        copyCallback={copyCallback}
      />
      <hr />
      <Chart
        chart={chart}
        className={classnames(classes.chart, 'userInfoChart')}
      />
    </div>
  );
};

export default UserInfo;
