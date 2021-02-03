import React from 'react';
import classnames from 'classnames';
import { UserInfoDesktopProps } from './types';
import { useGetStyles } from './styles';
import {
  Chart,
  Address,
} from './components';

const UserInfoDesktop = (props: UserInfoDesktopProps) => {
  const {
    className,
    classNameChart,
    classNameAddress,
    addressContent,
    chart,
    copyCallback,
  } = props;

  const { classes } = useGetStyles(props);
  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'userInfoDesktop')}>
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

export default UserInfoDesktop;
