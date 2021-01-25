import React from 'react';
import classnames from 'classnames';
import { UserInfoDesktopProps } from './types';
import { useGetStyles } from './styles';
import {
  Table,
  Chart,
  Address,
} from './components';

const UserInfoDesktop = (props: UserInfoDesktopProps) => {
  const {
    className,
    classNameChart,
    classNameAddress,
    classNameTable,
    addressContent,
    chart,
    tableDefaultProps,
    tabProps,
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
      <Table
        tableDefaultProps={tableDefaultProps}
        className={classnames(classes.table, classNameTable, 'userInfoTable')}
        classNameTab={classnames('tab')}
        classNameIndicator={classnames('indicator')}
        tabProps={tabProps}
      />
    </div>
  );
};

export default UserInfoDesktop;
