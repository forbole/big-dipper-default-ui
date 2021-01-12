import React from 'react';
import classnames from 'classnames';
import { ProposalResultProps } from './types';
import { useGetStyles } from './styles';
import {
  Table,
  Chart,
} from './components';

const ProposalResultMobile = (props: ProposalResultProps) => {
  const {
    chart, className, tableDefaultProps, tabProps,
  } = props;

  const { classes } = useGetStyles(props);
  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'proposalInfoDesktop')}>
      <Chart
        data={chart.data}
        title={chart.title}
        subTitle={chart.subTitle}
        amount={chart.amount}
        colors={chart.colors}
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

export default ProposalResultMobile;
