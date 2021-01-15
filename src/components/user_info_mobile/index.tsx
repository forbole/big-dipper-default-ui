import React from 'react';
import classnames from 'classnames';
import { UserInfoProps } from './types';
import { useGetStyles } from './styles';
import {
  // Table,
  Chart,
  Address,
} from './components';

const UserInfotMobile = (props: UserInfoProps) => {
  const {
    title, className, address, chart,
  } = props;

  const { classes } = useGetStyles();
  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'userInfoMobile')}>
      <h1>{title}</h1>
      <Address className={classes.address} address={address}/>

      <hr />
      <Chart
        chart={chart}
        className={classes.chart}
      />
      {/* <Table
        tableDefaultProps={tableDefaultProps}
        className={classes.table}
        classNameTab={classnames('tab')}
        classNameIndicator={classnames('indicator')}
        tabProps={tabProps}
      /> */}
    </div>
  );
};

export default UserInfotMobile;
