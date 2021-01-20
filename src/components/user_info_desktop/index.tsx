import React from 'react';
import classnames from 'classnames';
import { UserInfoMobileProps } from './types';
import { useGetStyles } from './styles';
import {
  Table,
  Chart,
  Address,
} from './components';

const UserInfoDesktop = (props: UserInfoMobileProps) => {
  const {
    title, className, address, chart, tableDefaultProps, tabProps,
  } = props;

  const { classes } = useGetStyles(props);
  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'userInfoMobile')}>
      <h1>{title}</h1>
      <Address className={classes.address} address={address} />
      <hr />
      <Chart
        chart={chart}
        className={classes.chart}
      />
      <Table
        tableDefaultProps={tableDefaultProps}
        className={classes.table}
        classNameTab={classnames('tab')}
        classNameIndicator={classnames('indicator')}
        tabProps={tabProps}
      />
    </div>
  );
};

export default UserInfoDesktop;
