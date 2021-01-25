import React from 'react';
import classnames from 'classnames';
import { UserInfoMobileProps } from './types';
import { useGetStyles } from './styles';
import {
  Table,
  Chart,
  Address,
} from './components';

const UserInfotMobile = (props: UserInfoMobileProps) => {
  const {
    title,
    className,
    classNameTable,
    classNameAddress,
    classNameChart,
    addressContent,
    chart,
    tableDefaultProps,
    tabProps,
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

export default UserInfotMobile;
