import React from 'react';
import classnames from 'classnames';
import { UserInfoMobileProps } from './types';
import { useGetStyles } from './styles';
import {
  Chart,
  Address,
} from './components';

const UserInfotMobile = (props: UserInfoMobileProps) => {
  const {
    title,
    className,
    classNameAddress,
    classNameChart,
    addressContent,
    chart,
    copyCallback,
  } = props;

  const { classes } = useGetStyles(props);
  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'userInfoMobile')}>
      <h1>{title}</h1>
      <Address
        className={classnames(classes.address, classNameAddress, 'userInfoAddress')}
        addressContent={addressContent}
        copyCallback={copyCallback}
      />
      <hr />
      <Chart
        chart={chart}
        className={classnames(classes.chart, classNameChart, 'userInfoChart')}
      />
    </div>
  );
};

export default UserInfotMobile;
